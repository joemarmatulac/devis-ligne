var q_queries =  require('../config/sql_queries.json')
var conn = require('../config/mysqlConnect')

var qservice = {
    find_byid: function (id) {
        return new Promise((resolve, reject) => {
            conn.mysqlcon.query(q_queries.Q_CLIENT_DEVIS_LIGNE_BYID, id , (error, result) => {
                if(error) reject(error)
                else resolve(JSON.stringify(result));
            });
        });
    },

    find_all: function () {
        return new Promise((resolve, reject) => {
            conn.mysqlcon.query(q_queries.Q_CLIENT_DEVIS_LIGNE_ALL, (err, result) => {
                if(err) reject (err)
                else resolve(JSON.stringify(result))
            });
        });
    },

    update: function(body){
        return new Promise((resolve, reject) => {
            conn.mysqlcon.query(q_queries.Q_CLIENT_DEVIS_LIGNE_UPDATE,
                    [body.PRIX_VENTE_UNITAIRE, body.QUANTITE_TOTALE, body.DESCRIPTION_ARTICLE, body.LIGNE_DEVIS],
                (error, result, field) => {
                    if (error) reject(error)
                    else {
                        resolve('true')
                    }
                });
        });
    },

    add: function (body) {
        return new Promise((resolve, reject) => {
            conn.mysqlcon.query(q_queries.Q_CLIENT_DEVIS_LIGNE_ADD,  body, (err, result) => {
                if(err) reject(err)
                else resolve ('true')
            });
        });
    },

    delete: function(id){
        return new Promise((resolve, reject) => {
            conn.mysqlcon.query(q_queries.Q_CLIENT_DEVIS_LIGNE_DELETE, id, (err, result) => {
                if(err) reject(err)
                else resolve('true')
            });
        });
    }

}

module.exports = {
    quoteService: qservice
}