'use strict';
/**
 * Indexing management
 *
 * node console/indexing [--config name]
 */
const Application = require('../Application');
const Console = require('../e-champ/evado/console/Console');
const params = Console.parseProcessArguments();
const instance = new Console({Application, params});

(async () => {
    await instance.createIndexes();
    process.exit();
})();