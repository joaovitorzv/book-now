"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
require("../../modules/users/providers");
var UsersRepository_1 = __importDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));
var BooksRepository_1 = __importDefault(require("../../modules/books/infra/typeorm/repositories/BooksRepository"));
var OrdersRepository_1 = __importDefault(require("../../modules/orders/infra/typeorm/repositories/OrdersRepository"));
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.default);
tsyringe_1.container.registerSingleton('BooksRepository', BooksRepository_1.default);
tsyringe_1.container.registerSingleton('OrdersRepository', OrdersRepository_1.default);
