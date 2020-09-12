"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Order = _interopRequireDefault(require("../entities/Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrdersRepository {
  constructor() {
    this.ormRepository = (0, _typeorm.getRepository)(_Order.default);
  }

  async create({
    customer_id,
    books_ordered,
    order_total,
    delivery
  }) {
    const order = this.ormRepository.create({
      customer_id,
      books_ordered,
      order_total,
      delivery
    });
    await this.ormRepository.save(order);
    return order;
  }

  async findAllOrders(customer_id) {
    const findOrders = await this.ormRepository.find({
      where: {
        customer_id
      }
    });
    return findOrders;
  }

}

var _default = OrdersRepository;
exports.default = _default;