import mysql from "mysql";
const db = mysql.createPool({
    host: '139.224.46.4',
    user: 'CarbonStore',
    password: 'kHss76Ecrb6rcxwc',
    database: 'carbonstore'
})
export default db