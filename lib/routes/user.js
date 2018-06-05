'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _UserController = require('../controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/login', _UserController2.default.login);

module.exports = router;