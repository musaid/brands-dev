'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.app = void 0;
const express_1 = __importDefault(require('express'));
const routes_1 = require('./routes');
// Boot express
exports.app = express_1.default();
// Application routing
routes_1.routes(exports.app);
if (process.env.NODE_ENV !== 'test') {
  const port = 5000;
  // Start server
  // eslint-disable-next-line no-console
  exports.app.listen(port, () =>
    console.log(`Server is listening on port ${port}!`)
  );
}
