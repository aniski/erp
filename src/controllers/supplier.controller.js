const supService = require('../services/supplier.service');
const errorType = require('../constants/error-types');

class SupController {
    // 获取全部供应商信息
    async getAllSup(ctx, next) {
        try {
            const res = await supService.getAllSup();
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }
    
    // 新增供应商
    async add(ctx, next) {
        // 判断是否存在
        const { name, man, idNumber, tel, address } = ctx.request.body;
        if( !name || !man || !idNumber || !tel || !address ) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await supService.add(name, man, idNumber, tel, address);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 删除供应商
    async remove(ctx, next) {
        // 判断是否存在
        const id = ctx.request.params.id;
        if(!id) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await supService.remove(id);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 编辑供应商
    async edit(ctx, next) {
        const id = ctx.request.params.id;
        // 判断是否存在
        const { name, man, idNumber, tel, address } = ctx.request.body;
        if( !id || !name || !man || !idNumber || !tel || !address ) {
           const err = new Error(errorType.PARAM_REQUIRED);
           ctx.app.emit('error', err, ctx);
       }

       // 数据库操作
       try {
           const res = await supService.edit(id, name, man, idNumber, tel, address);
           ctx.body = res;
       }catch(e) {
           const err = new Error(errorType.DATABASE_ERROR);
           ctx.app.emit('error', err, ctx);
       }
    }
}

module.exports = new SupController();