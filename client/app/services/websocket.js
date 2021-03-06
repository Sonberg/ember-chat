import Ember from 'ember';

export default Ember.Object.extend({
    isServiceFactory: true,
    notify: Ember.inject.service("notify"),
    messages: [{
        msg: "Welcome to your chat"
    }],
    writingBool: false,

    _setup: function () {
        let socket = this.socket = io.connect('http://localhost:3000/', {
            transports: ['websocket', 'polling', 'flashsocket']
        });

        
        /*
            CHAT | New message
        */
        socket.on('message', function (data) {
            data = JSON.parse(data);
            this.get('notify').log("Message recived");
            this.get('messages').pushObject({
                msg: data
            });
        }.bind(this));
        
        /*
            CHAT | User has joined the chat
        */
        socket.on('join', function (data) {
            data = JSON.parse(data);
            this.get('messages').pushObject({
                join: data
            });
        }.bind(this));

        /*
            CHAT | User is writing
        */
        socket.on('writing', function () {
            if (!this.get('writingBool')) {
                this.set('writingBool', true);
            }
            clearInterval(counter);
            var self = this;
            var counter = setInterval(function() {
                clearInterval(counter);
                self.set('writingBool', false);
            }, 1500);
            
        }.bind(this));

        socket.on('connection', function () {
        });

    }.on('init'),

    sendMessage: function (message) {
        this.get('messages').pushObject({
                me: message
            });
        
        this.socket.emit('message', JSON.stringify(message));
    },

    writing: function (e) {
        console.log(e.keyCode);
        this.socket.emit('writing', null);
    }
});