conn = require('../config/mysqlConnect')

var qservice = {
    find_byid: function (id) {
        return new Promise((resolve, reject) => {
            conn.mysqlcon.query('SELECT * FROM USER WHERE ID = ' + id + ';', (error, result) => {
                if(error) reject(error)
                else resolve(JSON.stringify(result));
            });
        });
    },

    update: function(body){
        return body.firstName;
    }

}

module.exports = {
    quoteService: qservice
}