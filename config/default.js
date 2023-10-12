'use strict';

module.exports = {

    title: 'E-Champ',

    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'test',
            }
        },
        'i18n': {
            language: 'en'
        },
        'arena': {
            games: {
                'draughts': require('./game/draughts/default')
            }
        }
    },
    modules: {
        'club': {
            Class: require('../module/club/Module')
        }
    },
    params: {
        'enableSignUp': true,
        'enablePasswordReset': true,
    },
    security: require('./default-security'),
    users: require('./default-users'),
    classes: require('./default-classes'),
};