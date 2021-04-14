const conn = require("../app/database");

async function test() {
  const statement = "select * from sp_user";
  const result = await conn.execute(statement);
  console.log(result);
  return result[0];
}

module.exports = test;
