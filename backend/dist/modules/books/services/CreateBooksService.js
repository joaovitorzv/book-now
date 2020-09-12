"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _dec, _class;

let CreateBookService = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class CreateBookService {
  constructor(@(0, _tsyringe.inject)('BooksRepository')
  booksRepository) {
    this.booksRepository = booksRepository;
  }

  async execute() {
    const books = await this.booksRepository.findAllBooks();
    return books;
  }

}) || _class);
var _default = CreateBookService;
exports.default = _default;