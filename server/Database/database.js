const mysql = require('mysql');

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "abc",
    database : "testdrivedb",
    multipleStatements: true,
    dateStrings: true
});

module.exports = db;