const express = require('express');
const route = express.Router()
const controller = require('../Controller/controller.js');

// const express = require('express');
// const dotenv =require('dotenv');
const app = express();
// const cors = require("cors");
// app.use(cors());

route.get('/img', controller.img);
route.get('/payli', controller.payli);
route.get('/Getedirr', controller.Getedirr);
route.get('/Getuser', controller.Getuser);
route.get('/GetAdminnot', controller.GetAdminnot);
route.post('/Getedirrho', controller.Getedirrho);
route.post('/Getedirrname', controller.Getedirrname);
route.post('/Getnot', controller.Getnot);
route.post('/uploads', controller.uploads);
route.post('/register', controller.register);
route.post('/storebook', controller.storebook);
route.post('/storecourse', controller.storecourse);
route.post('/storeClass', controller.storeClass);
route.post('/storeQuestion', controller.storeQuestion);
route.post('/storeTodo', controller.storeTodo);
route.post('/storeAnswers', controller.storeAnswers);
route.post('/storeannouce',controller.storeannouce);
route.get('/fetchclass', controller.fetchClass);
route.get('/fetchQuestion', controller.fetchQuestion);
route.get('/fetchbook', controller.fetchbook);
route.get('/fetchCourse', controller.fetchCourse);
route.get('/fetchTodo', controller.fetchTodo);
route.get('/fetchAnnouncement', controller.fetchAnnouncement);
route.post('/CreateEdir', controller.CreateEdir);
route.post('/GetReqnot', controller.GetReqnot);
route.post('/Getmemb', controller.Getmemb);
route.post('/Getedirrs', controller.Getedirrs);
route.post('/profile', controller.profile);
route.post('/payment', controller.payment);
route.post('/checkmonthpayment', controller.checkmonthpayment);
route.post('/monthpayment', controller.monthpayment);
route.post('/Join', controller.Join);
route.post('/Accept1', controller.Accept1);
route.post('/RequestService', controller.RequestService);
route.post('/AcceptService', controller.AcceptService);
route.post('/checkpayment', controller.checkpayment); 
route.post('/login-user', controller.loginUser);
route.post('/LeaveEdirr', controller.LeaveEdirr);
route.post('/UpdateBasic', controller.UpdateBasic);
route.post('/UpdateEmergency', controller.UpdateEmergency);
route.post('/UpdateAddress', controller.UpdateAddress);
route.post('/UpdateEducation', controller.UpdateEducation);
route.post('/UpdateMarital', controller.UpdateMarital);
route.post('/login-user1', controller.loginUser1);
route.post('/Report',controller.Report);
route.get('/api/forgot-password',controller.forgotPassword);
route.post('/Contact',controller.Contact);
route.post('/ResetPassword',controller.ResetPassword);
route.post('/verified',controller.verified);


module.exports = route