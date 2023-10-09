'use strict';

const Base = require('evado/model/auth/SignInForm');

module.exports = class SignInForm extends Base {

    static getConstants () {
        return {
            RULES: [ // extend class rules
                ['phone', 'required'],
                ['phone', 'validator/UserPhoneValidator'],
                ...super.RULES
            ],
            ATTR_LABELS: {
                phone: 'Phone'
            }
        };
    }

    async login () {
        if (!await this.validate()) {
            return false;
        }
        try {
            const service = this.spawn('security/PasswordAuthService');
            const email = this.get('email');
            const phone = this.get('phone');
            const password = this.get('password');
            const identity = await service.login(email, password, this.user);
            const duration = this.get('rememberMe') ? this.rememberPeriod : 0;
            await this.user.login({identity, duration});
        } catch (err) {
            this.addError('email', err);
            console.log(err)
        }
        await this.updateRateLimit();
   
        return !this.hasError();
    }
};
module.exports.init(module);