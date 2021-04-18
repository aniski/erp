const Router = require('koa-router');

const {
    varifyIsExist,
    varifyLogin,
    handlePassword
} = require('../middlewares/user.middleware');

const {
    getAllUser,
    login,
    register,
    remove,
    edit,
} = require('../controllers/user.controller');

const router = new Router({
    prefix: '/user'
});
/**
 * 获取所有用户
 */
router.get('/', getAllUser);
/**
 * 用户登录
 * body: account(账号)、password(密码)
 */
router.post('/login', varifyLogin, login);
/**
 * 用户注册
 * body：eid(员工id)、account(账号)、password(密码)、type(用户类型)
 */
router.post('/register', varifyIsExist, handlePassword, register);

/**
 * 删除用户
 * params: uid(用户id)
 */
router.delete('/delete/:uid', remove);

/**
 * 编辑用户
 * params: uid(用户id)
 * body：eid(员工id)、account(账号)、password(密码)、type(用户类型)
 */
router.put('/edit/:uid', varifyIsExist, handlePassword, edit);

module.exports = router;