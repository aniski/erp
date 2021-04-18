const conn = require('../app/database');

class UserService {
    // 获取所有用户信息
    async getAllUser() {
        const statement = `SELECT * from user;`;
        const res = await conn.execute(statement);
        return res[0]; 
    }
    
    // 添加用户到数据库
    async register(id, account, password, type) {
        const statement = `INSERT INTO user(eid, uaccount, upassword, utype) VALUES(?, ?, ?, ?);`;
        const res = await conn.execute(statement, [id, account, password, type]);
        return res[0] ? true : false; 
    }

    // 从数据库中删除用户
    async remove(id) {
        const statement = `DELETE FROM user WHERE uid = ?;`;
        const res = await conn.execute(statement, [id]);
        return res[0] ? true : false; 
    }

    // 从数据库中编辑用户
    async edit(uid, eid, account, password, type) {
        const statement = `UPDATE user SET eid=?, uaccount=?, upassword=?, utype=? WHERE uid = ?;`;
        const res = await conn.execute(statement, [eid, account, password, type, uid]);
        return res[0] ? true : false; 
    }

    // 通过账号、密码获取用户
    async getUserByAccount(account, password) {
        let res = null;
        if( !password ) {
            const statement = `SELECT * from user WHERE uaccount = ?;`;
            res = await conn.execute(statement, [account]);
        } else {
            const statement = `SELECT * from user WHERE uaccount = ? && upassword = ?;`;
            res = await conn.execute(statement, [account, password]);
        }
        return res[0]; 
    }
}

module.exports = new UserService();