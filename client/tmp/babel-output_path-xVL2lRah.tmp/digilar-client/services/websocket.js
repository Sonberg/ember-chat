define('digilar-client/services/websocket', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Object.extend({
        isServiceFactory: true,
        messages: ["Welcome to your chat"],

        _setup: (function () {
            var socket = this.socket = io.connect('//localhost:3000', {
                transports: ['websocket', 'polling', 'flashsocket']
            });

            socket.on('message', (function (data) {
                var message = JSON.parse(data);
                this.get('messages').pushObject(data);
            }).bind(this));

            socket.on('connection', function (data) {
                console.log(data);
            });
        }).on('init'),

        sendMessage: function sendMessage(message) {
            this.get('messages').pushObject(message);
            this.socket.emit('message', JSON.stringify(message));
        }
    });
});