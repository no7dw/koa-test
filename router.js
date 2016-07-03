'use strict'

const router = require('koa-router')()
var user = require('./userController')

router.get('/user/:id', user.find)
// router.put('/user', user.create, user.afterCreated) //not working
router.put('/user', user.create)

module.exports = router
