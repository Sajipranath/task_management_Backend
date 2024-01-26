const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');
const notificationController=require('../controllers/notificationController');



router.get('/',authMiddleware.verifyAdminManagerUserToken,notificationController.getNotification);



module.exports=router;

