const conn = require('../app/database');

class GoodsService {
    // 获取全部商品信息
    async getAllGoods() {
        const stat = `SELECT * FROM goods;`;
        const res = await conn.execute(stat);
        return res[0];
    }

    // 添加商品信息
    async add(name, price, type, place, specs, time, sid) {
        const stat = `
            INSERT INTO goods(gname, gprice, gtype, gplace, gspecs, gtime, sid) VALUES(?, ?, ?, ?, ?, ?, ?);
        `;
        const res = await conn.execute(stat, [name, price, type, place, specs, time, sid]);
        return res[0] ? true : false;
    }

    // 删除商品信息
    async remove(id) {
        const stat = `DELETE FROM goods WHERE gid = ?`;
        const res = await conn.execute(stat, [id]);
        return res[0] ? true : false;
    }

    // 编辑商品信息
    async edit(id, name, price, type, place, specs, time, sid) {
        const stat = `
            UPDATE goods SET gname = ?, gprice = ?, gtype = ?, gplace = ?
            , gspecs = ?, gtime = ?, sid = ? WHERE gid = ?;
        `;
        const res = await conn.execute(stat, [name, price, type, place, specs, time, sid, id]);
        return res[0] ? true : false;
    }
}

module.exports = new GoodsService();