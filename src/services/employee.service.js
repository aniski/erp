const conn = require('../app/database');

class EmpService {
    // 获取所有员工信息
    async getAllEmp() {
        const stat = `SELECT * FROM employee;`;
        const res = await conn.execute(stat);
        return res[0];
    }

    // 新增员工
    async add(name, sex, type, tel, address, age, idNumber, date, salary) {
        const stat = `
            INSERT INTO employee(ename, esex, etype, etel, eaddress, eage,
            eidnumber, edate, esalary) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);
         `;
        const res = await conn.execute(stat, [name, sex, type, tel, address,
             age, idNumber, date, salary]);
        return res[0] ? true : false;
    }

    // 删除员工
    async remove(id) {
        const stat = `DELETE FROM employee WHERE eid = ?`;
        const res = await conn.execute(stat, [id]);
        return res[0] ? true : false;
    }

    // 编辑员工
    async edit(id, name, sex, type, tel, address,
        age, idNumber, date, salary) {
        const stat = `
            UPDATE employee SET ename = ?, esex = ?, etype = ?, etel = ?, eaddress = ?
            , eage = ?,eidnumber = ?, edate = ?, esalary = ? WHERE eid = ?;
        `;
        const res = await conn.execute(stat, [name, sex, type, tel, address,
            age, idNumber, date, salary, id]);
        return res[0] ? true : false;
    }
}

module.exports = new EmpService();