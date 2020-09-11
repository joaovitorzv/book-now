"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var book_seed_1 = __importDefault(require("./seeds/book.seed"));
var config = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
        "dist/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrations": [
        "dist/shared/infra/typeorm/migrations/*.ts"
    ],
    "seeds": [
        "dist/shared/infra/typeorm/seeds/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
};
var createBooks = new book_seed_1.default();
typeorm_1.createConnection(config);
createBooks.run;
