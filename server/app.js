/*******************************************************
 The predix-seed Express web application includes these features:
 * routes to mock data files to demonstrate the UI
 * passport-predix-oauth for authentication, and a sample secure route
 * a proxy module for calling Predix services such as asset and time series
 *******************************************************/

var express = require('express');
var jsonServer = require('json-server'); // used for mock api responses
var path = require('path');
var cookieParser = require('cookie-parser'); // used for session cookie
var bodyParser = require('body-parser');
var session = require('express-session');


/**********************************************************************
 SETTING UP EXRESS SERVER
 ***********************************************************************/
var app = express();

//Initializing application modules
app.use(cookieParser('predixsample'));
// Initializing default session store
app.use(session({
    secret: 'predixsample',
    name: 'nsessionid',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


/****************************************************************************
 SET UP EXPRESS ROUTES
 *****************************************************************************/

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var server = app.listen(process.env.VCAP_APP_PORT || 5000, function () {
    console.log('Server started on port: ' + server.address().port);
});


module.exports = app;

