const express = require('express');
const route = express.Router()
const controller = require('../Controller/controller.js');

// const express = require('express');
// const dotenv =require('dotenv');
const app = express();
// const cors = require("cors");
// app.use(cors());

route.post('/removeUser',controller.removeUser);
route.post('/removeTodo',controller.removeTodo);
route.post('/removeClass',controller.removeClass);
route.post('/removeCourse',controller.removeCourse);
route.post('/removeQA',controller.removeQA);
route.post('/removeAnnouncement',controller.removeAnnouncement);
route.post('/register', controller.register);
route.post('/storebook', controller.storebook);
route.post('/storecourse', controller.storecourse);
route.post('/storeClass', controller.storeClass);
route.post('/storeQuestion', controller.storeQuestion);
route.post('/storeTodo', controller.storeTodo);
route.post('/storeAnswers', controller.storeAnswers);
route.post('/storeannouce',controller.storeannouce);
route.post('/storeMaterials',controller.storeMaterials);
route.get('/fetchclass', controller.fetchClass);
route.get('/fetchUsers', controller.fetchUsers);
route.post('/fetchAnswer', controller.fetchAnswer);
route.get('/fetchQuestion', controller.fetchQuestion);
route.get('/fetchbook', controller.fetchbook);
route.get('/fetchCourse', controller.fetchCourse);
route.get('/fetchTodo', controller.fetchTodo);
route.get('/fetchAnnouncement', controller.fetchAnnouncement);
route.get('/api/forgot-password',controller.forgotPassword);
route.post('/JoinClass', controller.JoinClass);
route.post('/login-user', controller.loginUser);
route.post('/ResetPassword',controller.ResetPassword);
route.post('/UpdateCourse',controller.UpdateCourse);
route.post('/UpdateAccount',controller.UpdateAccount);
route.post('/Updateannouncement',controller.Updateannouncement);


module.exports = route