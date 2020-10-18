const mysql = require('mysql');
const { DB: {host, user, password, database} } = require('../../config/config.json');

const connection = mysql.createConnection({
    host,
    user,
    password,
    database
})

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;