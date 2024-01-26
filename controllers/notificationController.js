const Project = require('../models/Project');
const { ProjectManager } = require('../models/Projectmanager');
const {User} =require('../models/User')
const Notification =require('../models/Notification')

const mongoose = require('mongoose');
const isValidObjectId = mongoose.isValidObjectId;


getNotification = async (req, res) => {
  try {
    // Fetch notifications from the database
    console.log('User ID in controller:', req.user._id);

    const notifications = await Notification.find().sort({ createdAt: -1 });

    // Extract relevant information from notifications
    const formattedNotifications = notifications.map(notification => ({
      _id: notification._id,
      message: notification.message,
      isRead: notification.isRead,
      createdAt: notification.createdAt,
      taskId:notification.taskId,
    }));

    res.status(200).json({ notifications: formattedNotifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}









  module.exports=
  {
    getNotification
  }