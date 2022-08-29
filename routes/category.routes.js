var express = require('express');
var api = express.Router();
var categoryController = require('../controllers/category.controller');


api.get('/categories', categoryController.getCategories);
api.get('/category', categoryController.getCategory);
api.post('/category/', categoryController.addCategory);
api.delete('/category/', categoryController.deleteCategory);
api.put('/category/:categoryId', categoryController.updateCategory);

module.exports = api;