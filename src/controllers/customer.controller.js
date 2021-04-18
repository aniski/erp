const ctrService = require('../services/customer.service');
const errorType = require('../constants/error-types');

class CtrController {
    // 获取全部客户信息
    async getAllCtr(ctx, next) {
        try {
            const res = await ctrService.getAllCtr();
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }
    
    // 新增客户
    async add(ctx, next) {
        // 判断是否存在
        const { name, idNumber, tel, address } = ctx.request.body;
        if( !name || !idNumber || !tel || !address ) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await ctrService.add(name, idNumber, tel, address);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 删除客户
    async remove(ctx, next) {
        // 判断是否存在
        const id = ctx.request.params.id;
        if(!id) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await ctrService.remove(id);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 编辑客户
    async edit(ctx, next) {
        const id = ctx.request.params.id;
        // 判断是否存在
        const { name, idNumber, tel, address } = ctx.request.body;
        if( !id || !name || !idNumber || !tel || !address ) {
           const err = new Error(errorType.PARAM_REQUIRED);
           ctx.app.emit('error', err, ctx);
       }

       // 数据库操作
       try {
           const res = await ctrService.edit(id, name, idNumber, tel, address);
           ctx.body = res;
       }catch(e) {
           const err = new Error(errorType.DATABASE_ERROR);
           ctx.app.emit('error', err, ctx);
       }
    }
}

module.exports = new CtrController();