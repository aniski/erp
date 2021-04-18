const empService = require('../services/employee.service');
const errorType = require('../constants/error-types');
class EmpController {
    // 获取全体员工信息
    async getAllEmp(ctx, next) {
        try {
            const res = await empService.getAllEmp();
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }
    
    // 新增员工
    async add(ctx, next) {
        // 判断是否存在
        const { name, sex, type, tel, address,
             age, idNumber, date, salary } = ctx.request.body;
        if(!name || !sex || !type || !tel || !address || !age || !idNumber || !date || !salary ) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await empService.add(name, sex, type, tel, address,
                age, idNumber, date, salary);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 删除员工
    async remove(ctx, next) {
        // 判断是否存在
        const id = ctx.request.params.id;
        if(!id) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await empService.remove(id);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 编辑员工
    async edit(ctx, next) {
        const id = ctx.request.params.id;
        // 判断是否存在
        const { name, sex, type, tel, address,
            age, idNumber, date, salary } = ctx.request.body;
       if(!id || !name || !sex || !type || !tel || !address || !age || !idNumber || !date || !salary ) {
           const err = new Error(errorType.PARAM_REQUIRED);
           ctx.app.emit('error', err, ctx);
       }

       // 数据库操作
       try {
           const res = await empService.edit(id, name, sex, type, tel, address,
               age, idNumber, date, salary);
           ctx.body = res;
       }catch(e) {
           const err = new Error(errorType.DATABASE_ERROR);
           ctx.app.emit('error', err, ctx);
       }
    }
}

module.exports = new EmpController();