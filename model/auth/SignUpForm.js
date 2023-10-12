'use strict';

const Base = require('evado/model/auth/SignUpForm');

module.exports = class SignUpForm extends Base {

    static getConstants () {
        return {
            RULES: [
                [['name', 'email', 'password', 'passwordRepeat', 'phone'], 'required'],
                ['name', 'validator/UserNameValidator'],
                ['email', 'email'],
                ['password', 'validator/PasswordValidator'],
                ['passwordRepeat', 'compare', {compareAttr: 'password'}],
                ['phone', 'validator/UserPhoneValidator'],
            ],
            ATTR_LABELS: {
                phone: 'Phone'
            }
        };
    }
};
module.exports.init(module);