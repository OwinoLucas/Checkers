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
                const draw1 = this.data.draw1
                
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

Club.JoinPage = class CustomJoinPage extends Club.JoinPage {
    init() {
        super.init();
        const phone = this.club.getData('userPhone');
        console.log('User phone', phone);
    }
};

Club.NewPage = class CustomNewPage extends Club.NewPage {
    init() {
        super.init();
        // const name = this.club.getData('userName');
        // console.log('Player Name', name);
        Jam.localStorage.set('userPlayerName', this.club.getData('userName'));
    }
};


Club.FormGames = class CustomFormGames extends Club.FormGames {
    init() {
        super.init();
        this.$list.find('input').eq(1).click();
    }
};