"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var book_seed_1 = __importDefault(require("./seeds/book.seed"));
var createBooks = new book_seed_1.default();
typeorm_1.createConnection();
createBooks.run;
