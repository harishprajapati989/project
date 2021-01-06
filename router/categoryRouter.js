const router = require('express').Router()
const categoryController = require('../controller/categoryController')

router.post('/addCategory' , categoryController.addCategory)
router.post('/deleteCategory' , categoryController.deleteCategory)


module.exports = router  