const errorType = require('../constants/error-types');
const userService = require('../services/user.service');
const { entrypt } = require('../utils/entrypt');

// 判断账号密码是否为空以及用户是否存在
const varifyIsExist = async (ctx, next) => {
    const { account, password } = ctx.request.body;

    // 判断是否为为空
    if(!account || !password) {
        const err = new Error(errorType.PARAM_REQUIRED);
        ctx.app.emit('error', err, ctx);
    }

    // 判断是否存在
    let res = null;
    try {
        const res = await userService.getUserByAccount(account);
    }catch(e) {
        const err = new Error(errorType.DATABASE_ERROR);
        ctx.app.emit('error', err, ctx);
    }
    if(res.length > 0) {
        const err = new Error(errorType.ACCOUNT_ALREADY_EXIST);
        ctx.app.emit('error', err, ctx);
    }

    await next();
}

// 用户登录验证
const varifyLogin = async (ctx, next) => {
    const { account, password } = ctx.request.body;

    // 判断是否为为空
    if(!account || !password) {
        const err = new Error(errorType.PARAM_REQUIRED);
        ctx.app.emit('error', err, ctx);
    }

    // 判断是否存在
    let res = null;
    try {
        res = await userService.getUserByAccount(account, entrypt(password));
    }catch(e) {
        const err = new Error(errorType.DATABASE_ERROR);
        ctx.app.emit('error', err, ctx);
    }
    if(res.length <= 0) {
        const err = new Error(errorType.ACCOUNT_OR_PASSWORD_ERROR);
        ctx.app.emit('error', err, ctx);
    }
    // 存储用户信息
    ctx.user = res[0];
    await next();
}

// 密码加密
const handlePassword = async (ctx, next) => {
    let { password } = ctx.request.body;
    if( !!password ) {
        ctx.request.body.password = entrypt(password);
    }

    await next();
}

module.exports = {
    varifyIsExist,
    varifyLogin,
    handlePassword
}