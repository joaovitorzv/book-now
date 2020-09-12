"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class CreateUserService {
  constructor(@(0, _tsyringe.inject)('UsersRepository')
  usersRepository, @(0, _tsyringe.inject)('HashProvider')
  hashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async execute({
    name,
    email,
    password
  }) {
    if (await this.usersRepository.findByEmail(email)) {
      throw new _AppError.default('Email address already used.');
    }

    const hash_password = await this.hashProvider.generateHash(password);
    const user = await this.usersRepository.create({
      name,
      email,
      password: hash_password
    });
    return user;
  }

}) || _class);
var _default = CreateUserService;
exports.default = _default;