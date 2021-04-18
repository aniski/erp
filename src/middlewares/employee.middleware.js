// 根据身份证获取年龄和性别
const handleIdNumber = async (ctx, next) => {
    const { idNumber } = ctx.request.body;
    // 获取性别
    const sex = parseInt(idNumber.substring(idNumber.length - 2, 
        idNumber.length - 1)) % 2 === 0 ? '女' : '男';
    // 获取年龄
    const age = (new Date()).getFullYear() - parseInt(idNumber.substring(6, 10));
    ctx.request.body.sex = sex;
    ctx.request.body.age = age;

    await next();
}

module.exports = {
    handleIdNumber
};