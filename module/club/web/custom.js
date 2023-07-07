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

                // this.sendWebSocketMessage();
                // get player IDs
                const winnerId = this.data.winnerId;
                const loserId = this.data.loserId;
                const draw1 = loser ? null : this.hands[0];
                
                this.sendPostMessage();
            } 

            sendWebSocketMessage () {
                this.play.send('custom', {});
            }

            
            sendPostMessage () {
                const fetch = new Jam.Fetch;
                
                const data = this.data.winnerId
                // console.log(data)

               
                return fetch.getText('/custom/some-request', {data})
                    .then(result => {
                        console.log('Request is done, the winner ID is: ', result);
                    })
                    .catch(() => {
                        console.error('Request is failed');
                    });
            }

          
        };
        Club.DraughtsEndEvent = Club.CustomDraughtsEndEvent;
    }
}