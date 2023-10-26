'use strict';

const Base = require('evado/model/User');

module.exports = class User extends Base {

    static getConstants () {
        return {
            ATTRS: [
                '_id',
                'name',
                'phone',
                'balance',
                'verified',
                'blocked',
                'unlockAt',
                'expiredPassword',
                'createdAt',
                'updatedAt',
                'authKey'
            ],
            INDEXES: [
                [{phone: 1}, {unique: true}]
            ],
            RULES: [
                [['name', 'phone'], 'required'],
                ['name', 'validator/UserNameValidator'],     
                [['blocked', 'verified', 'expiredPassword'], 'checkbox'],
                ['unlockAt', 'date'],
                ['name', 'unique', {
                    ignoreCase: true,
                    skipOnAnyError: true,
                    message: 'auth.nameAlreadyTaken'
                }],
                ['balance', 'number'], // value must be a number
                ['balance', 'default', {value: 0}], // sets default value if there is no value
                ['balance', 'unsafe'] // prevent loading from client request
            ],
            
        };
    }

    getPhone () {
        return this.get('phone')
    }

    getBalance () {
        return this.get('balance')
    }

    findByPhone(phone) {
        return this.find({phone});
    }
};
module.exports.init(module);