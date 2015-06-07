/* Manages the app window */

var gui = require('nw.gui');
var win = gui.Window.get();

$(window).on('keydown', function(e) {
    if (e.which === 18 && e.altKey === true) { // ALT + F4 combination
        win.close();
    }
});