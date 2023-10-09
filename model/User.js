'use strict';

const Base = require('evado/model/User');

module.exports = class User extends Base {

    static getConstants () {
        return {
            ATTRS: [
                ...super.ATTRS,
                'phone'
            ]
        };
    }

    getPhone () {
        return this.get('phone')
    }

    findByPhone(phone) {
        return this.find({phone});
    }
};
module.exports.init(module);