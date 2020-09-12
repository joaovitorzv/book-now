"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/users.routes"));

var _sessions = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/sessions.routes"));

var _books = _interopRequireDefault(require("../../../../modules/books/infra/http/routes/books.routes"));

var _orders = _interopRequireDefault(require("../../../../modules/orders/infra/http/routes/orders.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/users', _users.default);
routes.use('/sessions', _sessions.default);
routes.use('/books', _books.default);
routes.use('/orders', _orders.default);
var _default = routes;
exports.default = _default;