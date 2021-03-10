const express = require('express');

const router = express.Router()

const userController = require('../controllers/user')

router.post("/login",   userController.postLogin)

router.post('/logout',  userController.postLogout)

router.post("/signup",  userController.postSignup)

//router.post("/book",    userController.postBook)

router.get("/schedule", userController.getSchedule)

router.post("/chats",    userController.getClientChat)

module.exports = router;