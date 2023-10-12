'use strict';

const Base = require('evado/model/auth/ChangePasswordForm');

module.exports = class ChangePasswordForm extends Base {

    static getConstants () {
        return {
            RULES: [
                [['currentPassword', 'newPassword', 'newPasswordRepeat'], 'required'],
                [['newPasswordRepeat'], 'compare', {compareAttr: 'newPassword'}],
                [['newPassword'], 'compare', {
                    compareAttr: 'currentPassword',
                    operator: '!=',
                    message: 'Password must not be equal to the current'
                }],
                [['currentPassword', 'newPassword'], 'validator/PasswordValidator'],
                
            ],
        };
    }

   
};
module.exports.init();