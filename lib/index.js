'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _swaggerUiDist = require('swagger-ui-dist');

var _swaggerUiDist2 = _interopRequireDefault(_swaggerUiDist);

var _index = require('./routes/index.js');

var _index2 = _interopRequireDefault(_index);

var _server = require('./config/server.json');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.argv.includes('--prod')) {
    app.serverConfig = _server2.default['production'];
} else {
    app.serverConfig = _server2.default['default'];
}

var app = (0, _express2.default)();
(0, _index2.default)(app);

app.use(_express2.default.static(_swaggerUiDist2.default.absolutePath()));
app.listen(3110);

console.log('app listening ...', app.serverConfig);