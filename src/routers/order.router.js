const Router = require('koa-router');

const {
    add,
    remove,
    edit
} = require('../controllers/order.controller');

const router = new Router({
    prefix: '/order'
});

/**
 * 新增订单
 * params: uid(用户id)
 * body: name(客户姓名)、tel(手机)、address(地址)、idnumber(身份证号)
 */
router.post('/add/:uid', add);

/**
 * 删除订单
 * params: uid(用户id)
 */
router.delete('/delete/:uid', remove);

/**
 * 编辑订单
 * params: uid(用户id)
 * body: name(客户姓名)、tel(手机)、address(地址)、idnumber(身份证号)
 */
router.put('/edit/:uid', edit);


module.exports = router;

