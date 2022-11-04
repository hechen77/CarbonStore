const mysql = require('mysql');
const db = mysql.createPool({
    host: '139.224.46.4',
    user: 'carbonstore',
    password: 'kHss76Ecrb6rcxwc',
    database: 'carbonstore'
})
module.exports = db;