const Router = require('koa-router');

const {
    getAllGoods,
    add,
    remove,
    edit
} = require('../controllers/goods.controller');

const router = new Router({
    prefix: '/goods'
});

/**
 * 获取所有商品信息
 */
router.get('/', getAllGoods);

/**
 * 新增商品信息
 * body: name(商品名称)、price(价格)、type(商品类型)、
 * place(原产地)、specs(规格)、time(保质期)、sid(供应商)
 */
router.post('/add', add);

/**
 * 删除商品信息
 * params: gid(商品id)
 */
router.delete('/delete/:id', remove);

/**
 * 编辑商品信息
 * params: gid(商品id)
 * body: name(商品名称)、price(价格)、type(商品类型)、
 * place(原产地)、specs(规格)、time(保质期)、sid(供应商)
 */
router.put('/edit/:id', edit);

module.exports = router;