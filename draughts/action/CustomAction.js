'use strict';

const Base = require('../../e-champ-draughts/action/BaseAction');


module.exports = class CustomAction extends Base {

    validate () {
        if (this.play.finished) {
            return true;
        }
        
    }

    execute () {
        // place code here
        this.CustomDraughts.endRound()
        console.log(this.CustomDraughts.endRound())
        this.play.log('info', 'Custom action is done');
        
    }

};

