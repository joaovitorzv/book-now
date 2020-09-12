"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environment = require("../shared/utils/environment");

var _default = {
  secret: _environment.AUTH_SECRET,
  expiresIn: _environment.TOKEN_EXPIRATION_TIME
};
exports.default = _default;