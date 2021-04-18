const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');
const errorType = require('../constants/error-types');
const { PRIVATE_KEY } = require('../app/config');

class UserController {
    // 获取所有用户信息
    async getAllUser(ctx, next) {
        try{
            const res = await userService.getAllUser();
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 用户登录
    async login(ctx, next) {
        // 获取用户信息
        const { uid, eid, uaccount, utype} = ctx.user;
        // 根据用户信息生成Token
        const token = jwt.sign({
            id: uid,
            account: uaccount
        }, PRIVATE_KEY, {
            // token时效为一天
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256',
        });
        ctx.set('Authorization', token);
        ctx.set('UserRole', utype);
        ctx.body = {uid, eid, token};
    }

    // 用户注册
    async register(ctx, next) {
        const {eid = null, account, password, type} = ctx.request.body;
        // 账号、密码、类型不为空
        if(!account || !password || !type) {
            const err = new Error(errorType.PARAM_REQUIRED)
            return ctx.app.emit('error', err, ctx);
        }

        try{
            const res = await userService.register(eid, account, password, type);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 用户删除
    async remove(ctx, next) {
        const uid = ctx.params.uid;
        // 用户id不为空
        if(!uid) {
            const err = new Error(errorType.PARAM_REQUIRED)
            return ctx.app.emit('error', err, ctx);
        }

        try{
            const res = await userService.remove(uid);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }

    // 用户编辑
    async edit(ctx, next) {
        const uid = ctx.params.uid;
        const {eid = null, account, password, type} = ctx.request.body;
        // 用户id、账号、密码、类型不为空
        if(!uid || !account || !password || !type) {
            const err = new Error(errorType.PARAM_REQUIRED)
            return ctx.app.emit('error', err, ctx);
        }

        try{
            const res = await userService.edit(uid, eid, account, password, type);
            ctx.body = res;
        }catch(e) {
            const err = new Error(errorType.DATABASE_ERROR);
            ctx.app.emit('error', err, ctx);
        }
    }
}

module.exports = new UserController();