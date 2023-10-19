'use strict';

const Base = require('evado/model/auth/SignInForm');

module.exports = class SignInForm extends Base {

    static getConstants () {
        return {
            RULES: [
                [['phone', 'password'], 'required'],
                ['phone', 'validator/UserPhoneValidator'],
                ['rememberMe', 'checkbox'],
                ['password', 'validator/PasswordValidator'],
                
            ],
            ATTR_LABELS: {
                phone: 'Phone e.g(2547XXXXXXXX)'
            },
           
        };
    }

     /**
     * @param {Object} config
     * @param {Object} config.user - WebUser instance
     */
    constructor (config) {
        super({
            rateLimit: config.module.get('rateLimit'),
            rateLimitType: 'signIn',
            rememberPeriod: 7 * 24 * 3600,
            captchaEnabled: false,
            ...config
        });
    }


    async login () {
        if (!await this.validate()) {
            return false;
        }
        try {
            const service = this.spawn('security/PasswordAuthService');
            const phone = this.get('phone');
            const password = this.get('password');
            const identity = await service.login(phone, password, this.user);
            const duration = this.get('rememberMe') ? this.rememberPeriod : 0;
            await this.user.login({identity, duration});
        } catch (err) {
            this.addError('phone', err);
        }
        await this.updateRateLimit();
   
        return !this.hasError();
    }
};
module.exports.init(module);