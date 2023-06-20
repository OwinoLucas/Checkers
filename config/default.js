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
    security: require('./default-security'),
    users: require('./default-users')
};