"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../../dist/shared/errors/AppError"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShowUserService = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class ShowUserService {
  constructor(@(0, _tsyringe.inject)('UsersRepository')
  usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({
    customer_id
  }) {
    const user = await this.usersRepository.findById(customer_id);

    if (!user) {
      throw new _AppError.default('User not found');
    }

    return user;
  }

}) || _class);
var _default = ShowUserService;
exports.default = _default;