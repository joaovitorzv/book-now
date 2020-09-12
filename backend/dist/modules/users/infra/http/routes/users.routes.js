"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var UsersController_1 = __importDefault(require("../controllers/UsersController"));
var usersRouter = express_1.Router();
var usersController = new UsersController_1.default();
usersRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required(),
    },
    _a)), usersController.create);
usersRouter.get('/test', function (req, res) {
    res.status(200).json({ serverIsUp: true });
});
exports.default = usersRouter;
