'use strict';

const Base = require('evado/model/auth/RequestVerificationForm');

module.exports = class RequestVerificationForm extends Base {

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