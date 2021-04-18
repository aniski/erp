const conn = require('../app/database');

class SupService {
    // 获取全部供应商信息
    async getAllSup() {
        const stat = `SELECT * FROM supplier;`;
        const res = await conn.execute(stat);
        return res[0];
    }

    // 新增供应商
    async add(name, man, idNumber, tel, address) {
        const stat = `
            INSERT INTO supplier(sname, sman, smanidnumber, stel, saddress) VALUES(?, ?, ?, ?, ?);`;
        const res = await conn.execute(stat, [name, man, idNumber, tel, address]);
        return res[0] ? true : false;
    }

    // 删除供应商
    async remove(id) {
        const stat = `DELETE FROM supplier WHERE sid = ?`;
        const res = await conn.execute(stat, [id]);
        return res[0] ? true : false;
    }

    // 编辑供应商
    async edit(id, name, man, idNumber, tel, address) {
        const stat = `
            UPDATE supplier SET sname = ?, sman = ?, smanidnumber = ?,
             stel = ?, saddress = ? WHERE sid = ?;
        `;
        const res = await conn.execute(stat, [name, man, idNumber, tel, address, id]);
        return res[0] ? true : false;
    }
}

module.exports = new SupService();