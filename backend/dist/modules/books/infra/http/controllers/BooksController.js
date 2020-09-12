"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateBooksService = _interopRequireDefault(require("../../../services/CreateBooksService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksController {
  async index(request, response) {
    const getBooks = _tsyringe.container.resolve(_CreateBooksService.default);

    const user = await getBooks.execute();
    return response.status(200).json((0, _classTransformer.classToClass)(user));
  }

}

var _default = BooksController;
exports.default = _default;