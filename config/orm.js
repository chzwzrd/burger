var connection = require('./connection');

var orm = {
    selectAll: (table, cb) => {
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (cb) => {

    },
    updateOne: (cb) => {

    }
};

module.exports = orm;