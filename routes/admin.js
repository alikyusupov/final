const express = require('express');

const isAdmin = require("../middleware/isAdmin")

const router = express.Router()

const adminController = require('../controllers/admin')

router.get("/chats", isAdmin, adminController.getChats)

router.post("/getdetails",  isAdmin, adminController.getdetails)

router.post("/sendmessage", isAdmin, adminController.postMessage)

module.exports = router;