"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b;
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var OrdersController_1 = __importDefault(require("../controllers/OrdersController"));
var EnsureAuthentication_1 = __importDefault(require("../../../../users/infra/http/middlewares/EnsureAuthentication"));
var ordersRouter = express_1.Router();
var ordersController = new OrdersController_1.default();
ordersRouter.use(EnsureAuthentication_1.default);
ordersRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        books_id: celebrate_1.Joi.array().required(),
    },
    _a)), ordersController.create);
ordersRouter.get('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        customer_id: celebrate_1.Joi.string().required(),
    },
    _b)), ordersController.index);
exports.default = ordersRouter;
