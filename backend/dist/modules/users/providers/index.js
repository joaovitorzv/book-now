"use strict";

var _tsyringe = require("tsyringe");

var _BCryptHashProvider = _interopRequireDefault(require("../../../../dist/modules/users/providers/HashProvider/implementations/BCryptHashProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('HashProvider', _BCryptHashProvider.default);