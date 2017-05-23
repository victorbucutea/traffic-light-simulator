/*******************************************************
 The predix-seed Express web application includes these features:
 * routes to mock data files to demonstrate the UI
 * passport-predix-oauth for authentication, and a sample secure route
 * a proxy module for calling Predix services such as asset and time series
 *******************************************************/

var express = require('express');
var path = require('path');


/**********************************************************************
 SETTING UP EXRESS SERVER
 ***********************************************************************/
var app = express();

/****************************************************************************
 SET UP EXPRESS ROUTES
 *****************************************************************************/

app.use(express.static(path.join(__dirname, '../public')));


var server = app.listen(process.env.VCAP_APP_PORT || 5000, function () {
    console.log('Server started on port: ' + server.address().port);
});


module.exports = app;

