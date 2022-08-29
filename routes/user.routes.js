var express = require('express');
var api = express.Router();
var userController = require('../controllers/user.controller');


api.get('/users', userController.getUsers);
api.get('/user', userController.getUser);
api.post('/user/', userController.addUser);
api.delete('/user/:_id', userController.deleteUser);
api.put('/user/:userId',  userController.updateUser);
api.post('/login', userController.loginUser);

module.exports = api;
