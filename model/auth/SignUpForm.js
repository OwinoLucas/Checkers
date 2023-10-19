'use strict';

const Base = require('evado/model/auth/SignUpForm');

module.exports = class SignUpForm extends Base {

    static getConstants () {
        return {
            RULES: [
                [['name', 'password', 'passwordRepeat', 'phone'], 'required'],
                ['name', 'validator/UserNameValidator'],
                ['password', 'validator/PasswordValidator'],
                ['passwordRepeat', 'compare', {compareAttr: 'password'}],
                ['phone', 'validator/UserPhoneValidator'],
            ],
            ATTR_LABELS: {
                phone: 'Phone e.g(2547XXXXXXXX)'
            }
        };
    }

    async register () {
        if (!await this.validate()) {
            return false;
        }
        try {
            this.set('verified', !this.module.params.enableSignUpVerification);
            const service = this.spawn('security/PasswordAuthService');
            const user = await service.register(this.getAttrMap());
            if (!user.isVerified()) {
                const verification = await service.createVerification(user);
                await this.module.getMailer().sendVerification(verification, user);
            }
            await this.user.log('register', undefined, user);
            return user;
        } catch (err) {
            this.addError('register', err);
            console.log(err)
        }
    }
};
module.exports.init(module);