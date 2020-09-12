"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _tsyringe = require("tsyringe");

var _auth = _interopRequireDefault(require("../../../../dist/config/auth"));

var _AppError = _interopRequireDefault(require("../../../../dist/shared/errors/AppError"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AuthenticateUserService = (_dec = (0, _tsyringe.injectable)(), _dec(_class = class AuthenticateUserService {
  constructor(@(0, _tsyringe.inject)('UsersRepository')
  usersRepository, @(0, _tsyringe.inject)('HashProvider')
  hashProvider) {
    this.usersRepository = usersRepository;
    this.hashProvider = hashProvider;
  }

  async execute({
    email,
    password
  }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default('Incorrect Email or Password validation.', 401);
    }

    if (!(await this.hashProvider.compareHash(password, user.password))) {
      throw new _AppError.default('Incorrect Email/Password validation.', 401);
    }

    const token = (0, _jsonwebtoken.sign)({}, _auth.default.secret, {
      subject: user.id,
      expiresIn: _auth.default.expiresIn
    });
    return {
      user,
      token
    };
  }

}) || _class);
var _default = AuthenticateUserService;
exports.default = _default;