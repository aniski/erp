const conn = require('../app/database');

class CtrService {
    // 获取全部客户信息
    async getAllCtr() {
        const stat = `SELECT * FROM customer;`;
        const res = await conn.execute(stat);
        return res[0];
    }

    // 新增客户
    async add(name, idNumber, tel, address) {
        const stat = `
            INSERT INTO customer(cname, cidnumber, ctel, caddress) VALUES(?, ?, ?, ?);`;
        const res = await conn.execute(stat, [name, idNumber, tel, address]);
        return res[0] ? true : false;
    }

    // 删除客户
    async remove(id) {
        const stat = `DELETE FROM customer WHERE cid = ?`;
        const res = await conn.execute(stat, [id]);
        return res[0] ? true : false;
    }

    // 编辑客户
    async edit(id, name, idNumber, tel, address) {
        const stat = `
            UPDATE customer SET cname = ?, cidnumber = ?,
             ctel = ?, caddress = ? WHERE cid = ?;
        `;
        const res = await conn.execute(stat, [name, idNumber, tel, address, id]);
        return res[0] ? true : false;
    }
}

module.exports = new CtrService();