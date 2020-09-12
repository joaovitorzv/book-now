"use strict";

require("reflect-metadata");

require("express-async-errors");

var _express = _interopRequireDefault(require("express"));

var _ora = _interopRequireDefault(require("ora"));

var _cors = _interopRequireDefault(require("cors"));

var _celebrate = require("celebrate");

var _AppError = _interopRequireDefault(require("../../errors/AppError"));

var _routes = _interopRequireDefault(require("./routes"));

require("../../../../dist/shared/infra/typeorm");

require("../../../../dist/shared/container");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use((0, _celebrate.errors)());
app.use((error, request, response, _) => {
  if (error instanceof _AppError.default) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
app.listen(process.env.PORT || 3333, () => {
  (0, _ora.default)('server running').succeed();
});