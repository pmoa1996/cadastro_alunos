"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

require('./database/index');
require('./database/migrations/20231226230649-alunos');

const port = process.env.APP_PORT;
_app2.default.listen(port);
