const jwt = require('jsonwebtoken');

const errorType = require('../constants/error-types');
const { PUBLIC_KEY } = require('../app/config');
// 权限认证
const varifyAuth = async (ctx, next) => {
    // 如果是登录则不验证
    if(ctx.path === '/user/login') {
        await next();
        return;
    }

    // 获取token
    const authorization = ctx.request.header.authorization;
    let token = null;
    if(!!authorization) {
        // token使用Bearer传输
        token = authorization.replace('Bearer ', '');
    }
    // 验证token
    try{
        const user = jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256']
        });
        ctx.cuser = user;
        await next();
    }catch(e) {
        const err = new Error(errorType.UNAUTHORIZATION);
        ctx.app.emit('error', err, ctx);
    }
    
}

module.exports = { 
    varifyAuth 
};