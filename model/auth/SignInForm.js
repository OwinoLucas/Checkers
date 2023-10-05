'use strict';

const Base = require('evado/model/auth/SignInForm');

module.exports = class SignInForm extends Base {

    static getConstants () {
        return {
            RULES: [ // extend class rules
                // ['phone', 'required'],
                ['phone', 'validator/UserPhoneValidator'],
                ...super.RULES
            ],
            ATTR_LABELS: {
                phone: 'Phone'
            }
        };
    }
};
module.exports.init(module);