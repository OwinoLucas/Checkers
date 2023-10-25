'use strict';

const Base = require('e-champ-draughts/model/Options');

module.exports = class CustomOptions extends Base {

    static getConstants () {
        return {
           ATTRS: [ // {
            //     name: 'losing',
            //     label: 'Losing draughts',
            //     view: 'checkbox',
            //     format: 'boolean'
            // }, 
            // {
            //     name: 'backCapture',
            //     label: 'Uncrowned piece can jump backwards',
            //     view: 'checkbox',
            //     format: 'boolean'
            // }, 
            // {
            //     name: 'optionalCapture',
            //     label: 'Optional capture',
            //     view: 'checkbox',
            //     format: 'boolean',
            // },
            {
                name: 'darkFirst',
                label: 'Dark piece starts',
                view: 'checkbox',
                format: 'boolean'
            }],
            RULES: [
                [['darkFirst'],  'checkbox']
            ]
        };
    }
};
module.exports.init(module);