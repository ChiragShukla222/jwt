const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.post("/userlogin",userController.userLogin)

router.post("/userRegis",userController.userRegist)

module.exports=router