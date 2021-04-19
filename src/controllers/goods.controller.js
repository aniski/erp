const goodsService = require('../services/goods.service');
const errorType = require('../constants/error-types');

class GoodsController {
    // 获取所有商品信息
    async getAllGoods(ctx, next) {
        try {
            const res = await goodsService.getAllGoods();
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 添加商品信息 
    async add(ctx, next) {
        // 判断是否存在
        const { name, price, type, place, specs, time, sid } = ctx.request.body;
        if( !name || !price || !type || !place || !specs || !time || !sid ) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await goodsService.add(name, price, type, place, specs, time, sid);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 删除商品信息
    async remove(ctx, next) {
        // 判断是否存在
        const id = ctx.request.params.id;
        if( !id ) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await goodsService.remove(id);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 编辑商品信息
    async edit(ctx, next) {
        // 判断是否存在
        const id = ctx.request.params.id;
        const { name, price, type, place, specs, time, sid } = ctx.request.body;
        if( !id || !name || !price || !type || !place || !specs || !time || !sid ) {
            const err = new Error(errorType.PARAM_REQUIRED);
            ctx.app.emit('error', err, ctx);
        }

        // 数据库操作
        try {
            const res = await goodsService.edit(id, name, price, type, place, specs, time, sid);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }
}

module.exports = new GoodsController();