var express = require('express');
var api = express.Router();
var menuController = require('../controllers/menu.controller');


api.get('/menus', menuController.getMenus);
api.get('/menu/:_id', menuController.getMenu);
api.post('/menu/', menuController.addMenu);
api.delete('/menu/:_id', menuController.deleteMenu);
api.put('/menu/:menuId',  menuController.updateMenu);

module.exports = api;