/*jshint esversion: 6*/
var qservice = require('../service/quoteService');
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
        app.get('/api/ping', (request, response) => response.send('Ping Pong Ping Pong ...'));
    },

    by_id: function () {
        app.get('/api/quote/byid/:id', (request, response) => {
            qservice.quoteService.find_byid(request.params.id).then(data => response.end(data));
        });
    },

    find_all: function () {
        app.get('api/quote/findall', (request, response) => {
            response.send("find all unsupported function...")
        });
    },

    update: function () {

        app.post('/api/quote/update', (request, response) => {
            response.end(qservice.quoteService.update(request.body))
            //response.end(request.body.firstName);
        });
    },

    delete: function () {
        app.get('/api/quote/del',(request, response) => {
            response.send("Delete unsupported function...")
        });
    }
}

module.exports = {
    res: resource,
    init: initExpress
}