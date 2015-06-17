var ipc = require('ipc');

$(document).on('ready', function() {

    $('#add').on('click', function() {
        console.info('requesting game...');
        var x = ipc.send('request-game');
        console.log(x);
    });

});