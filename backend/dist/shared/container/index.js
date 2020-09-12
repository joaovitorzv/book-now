"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/users/providers");

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _BooksRepository = _interopRequireDefault(require("../../modules/books/infra/typeorm/repositories/BooksRepository"));

var _OrdersRepository = _interopRequireDefault(require("../../modules/orders/infra/typeorm/repositories/OrdersRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('BooksRepository', _BooksRepository.default);

_tsyringe.container.registerSingleton('OrdersRepository', _OrdersRepository.default);