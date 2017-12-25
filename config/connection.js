var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) console.error(err);
    console.log(`connected at id: ${connection.threadId}`);
});

module.exports = connection;