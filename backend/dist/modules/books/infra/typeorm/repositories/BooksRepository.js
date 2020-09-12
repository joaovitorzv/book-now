"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Book = _interopRequireDefault(require("../entities/Book"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksRepository {
  constructor() {
    this.ormRepository = (0, _typeorm.getRepository)(_Book.default);
  }

  async findAllBooks() {
    const books = await this.ormRepository.find();
    return books;
  }

  async findMatchingBooks(books_id) {
    const books = await this.ormRepository.find({
      where: {
        id: (0, _typeorm.Any)([books_id])
      }
    });
    return books;
  }

}

var _default = BooksRepository;
exports.default = _default;