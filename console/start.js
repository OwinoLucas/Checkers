'use strict';
/**
 * Start app
 *
 * node console/start [--config name] [--port number]
 */
const Application = require('../Application');
const Console = require('../e-champ/evado/console/Console');
const params = Console.parseProcessArguments();
const instance = new Console({Application, params});


(async () => {
    await instance.startApp();
})();