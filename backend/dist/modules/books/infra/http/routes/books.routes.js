"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _BooksController = _interopRequireDefault(require("../controllers/BooksController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const booksRouter = (0, _express.Router)();
const booksController = new _BooksController.default();
booksRouter.get('/', booksController.index);
var _default = booksRouter;
exports.default = _default;