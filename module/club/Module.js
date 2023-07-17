'use strict';

const Base = require('e-champ/module/club/Module');

module.exports = class ClubModule extends Base {
    static getConstants () {
        return {
            BEHAVIORS: {
                'access': {
                    Class: require('areto/filter/AccessControl'),
                    rules: [{
                        'allow': true,
                        'permissions': ['@']
                    }]
                }
            }
        };
    }
    constructor (config) {
        super({
            original: Base,
            ...config
        });
    }
};
module.exports.init(module);