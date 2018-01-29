'use strict';
var dotenv = require('dotenv').config();
var express = require('express');
var app = express();
var devisAPI = require('./resource/client_devis_resource');
var devisligneAPI = require('./resource/client_devis_ligne_resource');

var port = process.env.PORT || 3000;

devisAPI.init(app);
devisAPI.res.ping_app();
devisAPI.res.by_id();
devisAPI.res.find_all();
devisAPI.res.update();
devisAPI.res.add();
devisAPI.res.delete();

devisligneAPI.init(app);
devisligneAPI.res.by_id();
devisligneAPI.res.find_all();
devisligneAPI.res.update();
devisligneAPI.res.add();
devisligneAPI.res.delete();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

console.log(port);
app.listen(port);