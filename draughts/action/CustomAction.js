'use strict';

const Base = require('../../e-champ-draughts/action/BaseAction');

module.exports = class CustomAction extends Base {

    validate () {
        return true;
    }

    execute () {
        // place code here
        this.play.log('info', 'Custom action is done');
        // this.play.endRound(this.hand, {resigned: true});
        // console.log(this.play.endRound(this.hand, {resigned: true}))
    }
};