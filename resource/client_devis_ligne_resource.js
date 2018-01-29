/*jshint esversion: 6*/
var qservice = require('../service/client_devis_ligne_service');
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

    by_id: function () {
        app.get(rpath.CLIENT_DEVIS_LIGNE_BYID, (request, response) => {
            qservice.quoteService.find_byid(request.params.id).then(data => response.end(data));
        });
    },

    find_all: function () {
        app.get(rpath.CLIENT_DEVIS_LIGNE_ALL, (request, response) => {
            qservice.quoteService.find_all().then(data => response.end(data));
        });
    },

    update: function () {
        app.post(rpath.CLIENT_DEVIS_LIGNE_UPDATE, (request, response) => {
            qservice.quoteService.update(request.body).then(changed_rows => response.end(changed_rows));
        });
    },

    add: function () {
        app.post(rpath.CLIENT_DEVIS_LIGNE_ADD, (request, response) => {
            qservice.quoteService.add(request.body).then(devis => response.end(devis));
        });
    },

    delete: function () {
        app.get(rpath.CLIENT_DEVIS_LIGNE_DELETE, (request, response) => {
            qservice.quoteService.delete(request.params.id).then(res => response.end(res));
        });
    }
}

module.exports = {
    res: resource,
    init: initExpress
}