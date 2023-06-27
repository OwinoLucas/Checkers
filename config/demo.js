'use strict';

module.exports = {

    parent: 'default',
    port: 8000,

    params: {
        'enablePasswordChange': false,
        'enableSignUp': false,
        'static': {
            options: {
                maxAge: 60 * 60 * 1000
            }
        },
        'serverAddress': 'http://localhost:8000'
    }
};