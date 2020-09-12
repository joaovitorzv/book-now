"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../../dist/shared/errors/AppError"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShowOrdersService = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class ShowOrdersService {
  constructor(@(0, _tsyringe.inject)('OrdersRepository')
  ordersRepository, @(0, _tsyringe.inject)('UsersRepository')
  usersRepository) {
    this.ordersRepository = ordersRepository;
    this.usersRepository = usersRepository;
  }

  async execute({
    customer_id
  }) {
    const userExists = await this.usersRepository.findById(customer_id);

    if (!userExists) {
      throw new _AppError.default('User not found');
    }

    const orders = await this.ordersRepository.findAllOrders(customer_id);
    return orders;
  }

}) || _class);
var _default = ShowOrdersService;
exports.default = _default;