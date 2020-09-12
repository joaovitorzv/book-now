"use strict";

var _typeorm = require("typeorm");

var _book = _interopRequireDefault(require("./seeds/book.seed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ["dist/modules/**/infra/typeorm/entities/*.ts"],
  "migrations": ["dist/shared/infra/typeorm/migrations/*.ts"],
  "seeds": ["dist/shared/infra/typeorm/seeds/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
};
const createBooks = new _book.default();
(0, _typeorm.createConnection)(config);
createBooks.run;