"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BooksController_1 = __importDefault(require("../controllers/BooksController"));
var booksRouter = express_1.Router();
var booksController = new BooksController_1.default();
booksRouter.get('/', booksController.index);
exports.default = booksRouter;
