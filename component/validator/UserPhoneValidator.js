'use strict';

const USER_PHONE_REGEX = /^(\+254\s?)?([17]\d{2}[-\s]?\d{6}|1\d{8}|07\d{8}|07\s?\d{3}\s?\d{3}\s?\d{3})$/;


const Base = require('areto/validator/StringValidator');

module.exports = class UserPhoneValidator extends Base {

    constructor (config) {
        super({
            // intergerOnly: true,
            // max: 13,
            min: 10,
            pattern: USER_PHONE_REGEX,
            message: 'Invalid phone number',
            ...config.module.params.userPhoneValidator,
            ...config
        });
    }
};