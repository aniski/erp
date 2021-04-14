const mysql = require("mysql2");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = require("./config");

// 创建连接池
const conn = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});

// 判断连接是否成功
conn.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("database connection make an error");
    } else {
      console.log("database connect successfully");
    }
  });
});

module.exports = conn.promise();
