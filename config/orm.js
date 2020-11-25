const connection = require('./connection.js');

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
    },

    //update
    UpdateOne: function(val, id, cb) {
        var queryString = `UPDATE burgers SET devoured = ${val} WHERE id =${id}`;
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            cb(data);
        })
    }
};


module.exports = orm;