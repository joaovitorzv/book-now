"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _classTransformer = require("class-transformer");

var _CreateOrderService = _interopRequireDefault(require("../../../../../../dist/modules/orders/services/CreateOrderService"));

var _ShowOrdersService = _interopRequireDefault(require("../../../../../../dist/modules/orders/services/ShowOrdersService"));

var _ShowUserService = _interopRequireDefault(require("../../../../../../dist/modules/users/services/ShowUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrdersController {
  async create(request, response) {
    const {
      books_id
    } = request.body;
    const {
      id: customer_id
    } = request.user;

    const createOrder = _tsyringe.container.resolve(_CreateOrderService.default);

    const order = await createOrder.execute({
      customer_id,
      books_id
    });
    return response.status(200).json((0, _classTransformer.classToClass)(order));
  }

  async index(request, response) {
    const {
      id: customer_id
    } = request.user;

    const getOrders = _tsyringe.container.resolve(_ShowOrdersService.default);

    const getUser = _tsyringe.container.resolve(_ShowUserService.default);

    const orders = await getOrders.execute({
      customer_id
    });
    return response.status(200).json((0, _classTransformer.classToClass)(orders));
  }

}

var _default = OrdersController;
exports.default = _default;