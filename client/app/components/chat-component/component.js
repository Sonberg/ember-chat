import Ember from 'ember';

export default Ember.Component.extend({
    isServiceFactory: true,
    socket: Ember.inject.service("websocket"),
    keyDown: function (e) {
        this.get('socket').writing(e);
    },
    actions: {
        sendMessage() {
                var message = this.get("message");
                this.set('message', "");
                this.get('socket').sendMessage(message);
            }
    }
});


/*

dummy: Ember.inject.service(),
    actions: {
        sendMessage: function () {
            var message = this.get("message");
            this.get("websocket").sendMessage(JSON.stringify(message));
            this.set("message", null);
        
        }
    }

*/