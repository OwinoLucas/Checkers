'use strict';

const Base = require('evado/model/auth/ResetPasswordForm');

module.exports = class ResetPasswordForm extends Base {

    static getConstants () {
        return {
            RULES: [
                [['newPassword', 'newPasswordRepeat'], 'required'],
                ['newPasswordRepeat', 'compare', {compareAttr: 'newPassword'}],
                ['newPassword', 'validator/PasswordValidator'],
                ['key', 'required', {message: 'Reset key required'}],
               
            ],
            ATTR_LABELS: {
                newPassword: 'New Password',
                newPasswordRepeat: 'Repeat new Password'
            }
        };
    }


};
module.exports.init();