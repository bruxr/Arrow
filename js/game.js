arrow.Game = Backbone.Model.extend({
    defaults: {
        name: '',
        path: null,
        image: ''
    },

    initialize: function() {
        var p = this.get('path');
        var p2;
        var name;

        // Use the containing folder name as the game name for windows
        if (process.platform == 'win32') {
            p2 = p.split('\\');
            name = p2[p2.length - 2];
        }
        // Extract the app name without the extension for mac
        else {
            p2 = p.split('/');
            p2 = p2[p2.length - 1];
            var m = p2.match(/([^\.]+)\.app$/);
            name = m[1];
        }
    }
});