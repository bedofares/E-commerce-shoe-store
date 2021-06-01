const mysql = require('mysql2');
const secrets = require('../secrets');

const config = mysql.createConnection({
    host: "atp.fhstp.ac.at",
    port: 8007,
    user: "cc201013",
    password: secrets.dbPassword,
    database: "cc201013"
});

config.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = {config}
