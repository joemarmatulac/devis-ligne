'use strict';
var dotenv = require('dotenv').config();
var express = require('express');
var app = express();
var clientQuoteApi = require('./resource/clientQuoteResourse');

var port = process.env.PORT || 3000;

clientQuoteApi.init(app);
clientQuoteApi.res.ping_app();
clientQuoteApi.res.by_id();
clientQuoteApi.res.delete();
clientQuoteApi.res.find_all();
clientQuoteApi.res.update()

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

console.log(port);
app.listen(port);