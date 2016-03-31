import Ember from 'ember';

export default Ember.Component.extend({
    isServiceFactory: true,
    socket: Ember.inject.service("websocket"),
    notify: Ember.inject.service("notify"),
    keyDown: function (e) {
        this.get('socket').writing(e);
    },
    actions: {
        sendMessage() {
                var message = this.get("message");
                this.set('message', "");
                this.get('socket').sendMessage(message);
                this.get('notify').success('Message sent');
            }
    }
});

