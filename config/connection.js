var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'wurdb0dj66ljyso4',
    password: 'rxw0fgxwskfbo8bz',
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