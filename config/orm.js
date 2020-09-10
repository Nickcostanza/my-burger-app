//selectAll()
//insertOne()
//updateOne()
const = require('./connection.js');

var orm = {
    //selectall()
    selectAll: function(cb) {
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    },

    //insertOne
    insertOne: function (col, val, cb) {
        var queryString = `INSERT INTO burgers (${col}) VALUES (?)`;
        connection.query(queryString, val, (err, data) => {
            if (err) throw err;
            cb(data);
        });
    }
}