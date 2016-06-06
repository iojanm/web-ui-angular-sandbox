//
// To launch via Node:
//    cd dist; SERVER_PORT=8626 node static/server.js
//
// To launch via Grunt:
//    grunt serve --dev or grunt serve
//
// To start with PM2:
//    cd dist; SERVER_PORT=8626 pm2 start static/server.js
//
console.log('Loading express server...');

var path = require('path');
var express = require('express');
var app = express();
var isGrunt = (process.title === 'grunt');
//var cookieParser = require('cookie-parser');
//var wdprDeviceDetection = require('wdpr-device-detection');

var port = process.env.SERVER_PORT || 8626;
var staticRoot = path.resolve(process.env.STATIC_ROOT || __dirname + '/../../client');

app.use(express.static(staticRoot));
//app.use('/assets/', express.static(staticRoot + '/assets/'));
//app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
    //app.use('/bower_components',  express.static('bower_components'));
}

// routes to serve the static file
/*app.get('/robots.txt', function(req, res) {
    //res.sendFile(staticRoot + '/robots.txt');
});*/

//As a fallback, any route that would otherwise throw a 404 (Not Found) will be given to the
//home page, which will try to decompose the route and use the correct client-side route.
app.use(function(req, res, next) {
    console.log('Falling back to ' + staticRoot + '/index.html instead of ' + req.url);
    req.url = '/';
    next();
});

app.use(express.static(staticRoot));

app.on('error', function(err) {
    console.error('Express error:', err);
    if (err.code === 'EADDRINUSE') {
        console.error('Port ' + port + ' in use');
    }
});

if (isGrunt) {
    module.exports = app;
} else {
    // This is pm2 starting up the server
    app.listen(port, function() {
        console.log('Web server started on port:' + port + ' [pid: ' + process.pid + ']');
    });
}
