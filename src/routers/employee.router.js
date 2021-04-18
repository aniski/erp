const Router = require('koa-router');

const {
    handleIdNumber
} = require('../middlewares/employee.middleware');

const {
    getAllEmp,
    add,
    remove,
    edit
} = require('../controllers/employee.controller');

const router = new Router({
    prefix: '/emp'
});

/**
 * 获取所有员工信息
 */
router.get('/', getAllEmp);

/**
 * 新增员工
 * body: name(员工姓名)、type(职务)、tel(手机)、address(地址)、idnumber(身份证号)
 * date(入职时间)、salary(薪资)
 */
router.post('/add', handleIdNumber, add);

/**
 * 删除员工
 * params: eid(员工id)
 */
router.delete('/delete/:id', remove);

/**
 * 编辑员工
 * params: eid(员工id)
 * body: name(员工姓名)、type(职务)、tel(手机)、address(地址)、idnumber(身份证号)
 * date(入职时间)、salary(薪资)
 */
router.put('/edit/:id', handleIdNumber, edit);

module.exports = router;