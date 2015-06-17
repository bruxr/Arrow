var arrow = {};
var ipc = require('ipc');

ipc.on('request-game-reply', function(args) {
    var games = [];
    _.each(args, function(p) {
        games.push(new arrow.Game({
            path: p
        }));
    });
});