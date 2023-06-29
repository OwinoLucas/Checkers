'use strict';

Club.PlayPage = class extends Club.PlayPage {

    startPlay () {
        super.startPlay(...arguments);

        const play = this.getPlay();
        const name = play?.game.name;
        if (name === 'draughts') {
            this.customDraughtsPlay();
        }
        
        
    }
    

    customDraughtsPlay () {
        if (Club.CustomDraughtsEndEvent) {
            return; 
        }
        Club.CustomDraughtsEndEvent = class CustomDraughtsEndEvent extends Club.DraughtsEndEvent {
            finish () {
                super.finish();
                // console.log(this.getWinner)
                // this.sendWebSocketMessage();
                this.sendPostMessage();
            } 

            sendWebSocketMessage () {
                this.play.send('custom', {});
            }

            
            sendPostMessage () {
                const fetch = new Jam.Fetch;
                // console.log(winner)
                const data = this.data
                // console.log(CustomDraughts)

               
                return fetch.execute('/custom/some-request', {data})
                    .then(result => {
                        console.log('Request is done', result);
                    })
                    .catch(() => {
                        console.error('Request is failed');
                    });
            }

          
        };
        Club.DraughtsEndEvent = Club.CustomDraughtsEndEvent;
    }
}