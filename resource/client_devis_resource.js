/*jshint esversion: 6*/
var qservice = require('../service/client_devis_service');
var rpath = require('../config/resourcepath.json')
var bodyParser = require('body-parser');
var promise = require('promise');

var app = null;

function initExpress(exapp) {
    app = exapp;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

var resource = {
    ping_app: function () {
        app.get(rpath.APP_PING, (request, response) => response.send('Ping Pong Ping Pong ...'));
    },

    by_id: function () {
        app.get(rpath.CLIENT_DEVIS_BY_ID, (request, response) => {
            qservice.quoteService.find_byid(request.params.id).then(data => response.end(data));
        });
    },

    find_all: function () {
        app.get(rpath.CLIENT_DEVIS_FINDALL, (request, response) => {
            qservice.quoteService.find_all_clntdevis().then(data => response.end(data));
        });
    },

    update: function () {
        app.post(rpath.CLIENT_DEVIS_UPDATE, (request, response) => {
            qservice.quoteService.update(request.body).then(changed_rows => response.end(changed_rows));
        });
    },

    add: function () {
        app.post(rpath.CLIENT_DEVIS_ADD, (request, response) => {
           qservice.quoteService.add(request.body).then(devis => response.end(devis));
        });
    },

    delete: function () {
        app.get(rpath.CLIENT_DEVIS_DELETE,(request, response) => {
            qservice.quoteService.delete(request.params.id).then(res => response.end(res));
        });
    }
}

module.exports = {
    res: resource,
    init: initExpress
}