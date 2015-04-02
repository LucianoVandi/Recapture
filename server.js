var forever = require('forever-monitor');

var child = new (forever.Monitor)('api.js', {
    max: 3,
    silent: false,
    watch: true,
    watchDirectory: 'rest_api',
    args: []
});

child.on('exit', function () {
    console.log('api.js has exited after 3 restarts');
});

child.on('watch:restart', function(info) {
    console.error('Restaring script because ' + info.file + ' changed');
});
 
child.on('restart', function() {
    console.error('Forever restarting script for ' + child.times + ' time');
});

child.start();