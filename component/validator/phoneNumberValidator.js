'use strict';


const Base = require('areto/validator/NumberValidator');

module.exports = class phoneNumberValidator extends Base {

    /**
     * @param {Object} config
     * @param {number} config.max - Max value
     * @param {number} config.min - Min value
    */

    constructor (config) {
        super({
            integerOnly: true,
            min: null,
            max: 13,
            ...config.module.params.phoneNumberValidator,
            ...config
        });
    }
};