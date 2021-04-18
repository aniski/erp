const Router = require('koa-router');

const {
    getAllCtr,
    add,
    remove,
    edit
} = require('../controllers/customer.controller');

const router = new Router({
    prefix: '/ctr'
});

/**
 * 获取所有客户信息
 */
router.get('/', getAllCtr);

/**
 * 新增客户
 * body: name(客户姓名)、tel(手机)、address(地址)、idnumber(身份证号)
 */
router.post('/add', add);

/**
 * 删除客户
 * params: cid(客户id)
 */
router.delete('/delete/:id', remove);

/**
 * 编辑客户
 * params: cid(客户id)
 * body: name(客户姓名)、tel(手机)、address(地址)、idnumber(身份证号)
 */
router.put('/edit/:id', edit);

module.exports = router;