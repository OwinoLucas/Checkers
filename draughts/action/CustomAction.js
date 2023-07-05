'use strict';

const Base = require('e-champ-draughts/action/BaseAction');


module.exports = class CustomAction extends Base {

    validate () {
        if (this.play.finished) {
            return true;
        }
        
    }

    execute () {
        // place code here
        
        this.play.log('info', 'Custom action is done');
        
    }

    getWinner () {
        this.play.endRound()
    }

};

