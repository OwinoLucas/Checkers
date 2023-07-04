'use strict';
const Base = require('../e-champ/evado/component/base/BaseController');


module.exports = class CustomController extends Base {

    static getConstants () {
        return {
            METHODS: {
                'someRequest': 'post' // only POST requests is allowed
            }
        };
    }
    
    async actionSomeRequest () {
        const params = this.getPostParams();
        // console.log(results.)
        if (!params.data) {
            throw new BadRequest('No valid request data');
        }
        this.send(params.data);
    }

};
module.exports.init(module);

const BadRequest = require('../areto/error/http/BadRequest');


