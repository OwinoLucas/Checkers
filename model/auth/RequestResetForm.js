'use strict';

const Base = require('evado/model/auth/RequestResetForm');

module.exports = class RequestResetForm extends Base {

    static getConstants () {
        return {
            RULES: [
                [['email'], 'required'],
                ['email', 'email'],
            ],
        };
    }

  
};
module.exports.init();