"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
var sessions_routes_1 = __importDefault(require("@modules/users/infra/http/routes/sessions.routes"));
var books_routes_1 = __importDefault(require("@modules/books/infra/http/routes/books.routes"));
var orders_routes_1 = __importDefault(require("@modules/orders/infra/http/routes/orders.routes"));
var routes = express_1.Router();
routes.use('/users', users_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
routes.use('/books', books_routes_1.default);
routes.use('/orders', orders_routes_1.default);
exports.default = routes;
