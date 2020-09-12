"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _OrdersController = _interopRequireDefault(require("../controllers/OrdersController"));

var _EnsureAuthentication = _interopRequireDefault(require("../../../../users/infra/http/middlewares/EnsureAuthentication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ordersRouter = (0, _express.Router)();
const ordersController = new _OrdersController.default();
ordersRouter.use(_EnsureAuthentication.default);
ordersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    books_id: _celebrate.Joi.array().required()
  }
}), ordersController.create);
ordersRouter.get('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    customer_id: _celebrate.Joi.string().required()
  }
}), ordersController.index);
var _default = ordersRouter;
exports.default = _default;