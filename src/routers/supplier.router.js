const Router = require('koa-router');

const {
    getAllSup,
    add,
    remove,
    edit
} = require('../controllers/supplier.controller');

const router = new Router({
    prefix: '/sup'
});

/**
 * 获取所有供应商信息
 */
router.get('/', getAllSup);

/**
 * 新增供应商
 * body: name(供应商名称)、man(联系人)、idnumber(身份证号)、tel(手机)、address(地址)
 */
router.post('/add', add);

/**
 * 删除供应商
 * params: sid(供应商id)
 */
router.delete('/delete/:id', remove);

/**
 * 编辑供应商
 * params: sid(供应商id)
 * body: name(供应商名称)、man(联系人)、idnumber(身份证号)、tel(手机)、address(地址)
 */
router.put('/edit/:id', edit);

module.exports = router;