const errorType = require('../constants/error-types');

// 错误处理
const handleError = (err, ctx) => {
    let status, message;
    console.log(err);
    switch(err.message) {
        case errorType.PARAM_REQUIRED:
                message = '重要参数不能为空';
                status = 400;
                break;
        case errorType.DATABASE_ERROR:
                message = '数据库错误';
                status = 500;
                break;
        case errorType.ACCOUNT_ALREADY_EXIST:
                message = '用户已存在';
                status = 409;
                break;
        case errorType.ACCOUNT_OR_PASSWORD_ERROR:
                message = '账号或密码错误';
                status = 400;
                break;
        case errorType.UNAUTHORIZATION:
                message = '用户未登录';
                status = 401;
                break;
        default:
            break;
    }

    ctx.status = status || 404;
    ctx.body = message || '未知错误';
}

module.exports = handleError;