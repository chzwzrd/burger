var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.error(`Error connection: ${err.stack}`);
        return;
    }
    console.log(`Connected at id: ${connection.threadId}`);
});

module.exports = connection;