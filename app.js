var app = require('app');
var dialog = require('dialog');
var ipc = require('ipc');
var wndow = require('browser-window');
var mw;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    app.quit();
});

// Create the main window when the app is ready
app.on('ready', function() {
    mw = new wndow({
        width: 960,
        height: 540
    });
    mw.hide();
    mw.loadUrl('file://'+ __dirname +'/arrow.html');
    mw.webContents.on('did-finish-load', function() {
        mw.show();
    });
    mw.on('closed', function() {
        mw = null;
    });
    mw.openDevTools();
});

// Handle requests for game exe location
ipc.on('request-game', function(event) {
    console.info('game request received.');

    // Use .app for Mac and .exe for windows
    var exts;
    var path;
    if (process.platform == 'darwin') {
        exts = ['app'];
        path = '/Applications';
    }
    else {
        exts = ['exe'];
        path = 'C:\\';
    }

    // Show the dialog window
    var game = dialog.showOpenDialog(mw, {
        title: 'Select Game',
        defaultPath: path,
        filters: [{name: 'Games', extensions: exts }],
        properties: ['openFile', 'multiSelections'],
    }, function(game) {
        if (game !== undefined) {
            event.sender.send('request-game-reply', game);
        }
    });
});