const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodepro',
    password: ''
});

module.exports = pool.promise();