"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var delivery;

(function (delivery) {
  delivery[delivery["defaultPrice"] = 14.75] = "defaultPrice";
  delivery[delivery["discountAbove"] = 70] = "discountAbove";
})(delivery || (delivery = {}));

let CreateOrderService = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class CreateOrderService {
  constructor(@(0, _tsyringe.inject)('OrdersRepository')
  ordersRepository, @(0, _tsyringe.inject)('UsersRepository')
  usersRepository, @(0, _tsyringe.inject)('BooksRepository')
  booksRepository) {
    this.ordersRepository = ordersRepository;
    this.usersRepository = usersRepository;
    this.booksRepository = booksRepository;
  }

  async execute({
    customer_id,
    books_id
  }) {
    let books = [];
    const booksOrdered = await this.booksRepository.findMatchingBooks(books_id);

    if (!booksOrdered) {
      throw new _AppError.default('Books not available on stock');
    }

    booksOrdered.map(book => books.push(book.bookCoverUrl)); // test if i will need use user saved on db

    const customer = await this.usersRepository.findById(customer_id);

    if (!customer) {
      throw new _AppError.default('Customer not found');
    }

    const orderTotal = booksOrdered.map(book => book.price).reduce((accumulator, currentValue) => accumulator + parseFloat(String(currentValue)), 0);
    console.log(orderTotal);
    const totalDelivery = orderTotal > delivery.discountAbove ? 0 : delivery.defaultPrice;
    const order = await this.ordersRepository.create({
      books_ordered: books,
      customer_id,
      delivery: totalDelivery,
      order_total: orderTotal
    });
    return order;
  }

}) || _class);
var _default = CreateOrderService;
exports.default = _default;