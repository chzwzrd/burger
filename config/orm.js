var connection = require('./connection');

var printQuestionMarks = (num) => {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

var orm = {
    selectAll: (table, cb) => {
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        var queryString = 'INSERT INTO ' + table;

        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES (" + printQuestionMarks(vals.length) + ")";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) console.error(err);
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {

    },
    deleteOne: (table, condition, db) => {

    }
};

module.exports = orm;