import mysql from "mysql";
const ServerSql = {
  host: "139.224.46.4",
  user: "carbonstore",
  password: "kHss76Ecrb6rcxwc",
  database: "carbonstore",
  multipleStatements: true,
  acquireTimeout: 15000, // 连接超时时间
  connectionLimit: 100, // 最大连接数
  waitForConnections: true, // 超过最大连接时排队
  queueLimit: 0, // 排队最大数量(0 代表不做限制)
};
const localSql = {
  host: "localhost",
  user: "root",
  password: "lxc173156",
  database: "carbonstore",
  multipleStatements: true,
  acquireTimeout: 15000, // 连接超时时间
  connectionLimit: 100, // 最大连接数
  waitForConnections: true, // 超过最大连接时排队
  queueLimit: 0, // 排队最大数量(0 代表不做限制)
};
const db = mysql.createConnection(ServerSql);
export default db;
