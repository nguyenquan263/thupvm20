const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const MULTER = require('multer');
var router = EXPRESS.Router();

var defaultController = require('../controllers/default');
var userController = require('../controllers/user');
var postController = require('../controllers/post');

var isAuthenticated = require('../utils/isAuthenticated');

// DEFAULT CONTROLLERS
router.get('/', isAuthenticated, defaultController.sayHello);

// USER CONTROLLERS
router.get('/user', isAuthenticated, userController.retrieveAll);
router.get('/user/:id', isAuthenticated, userController.retrieveOne);
router.post('/user', isAuthenticated, userController.create);
router.put('/user/:id', isAuthenticated, userController.update);
router.delete('/user/:id', isAuthenticated, userController.delete);
router.post('/login', userController.login);

// POST CONTROLLERS
router.get('/post', isAuthenticated, postController.retrieveAll);
router.get('/post/:id', isAuthenticated, postController.retrieveOne);
router.post('/post', isAuthenticated, postController.create);
router.put('/post/:id', isAuthenticated, postController.update);
router.delete('/post/:id', isAuthenticated, postController.delete);
module.exports = router;