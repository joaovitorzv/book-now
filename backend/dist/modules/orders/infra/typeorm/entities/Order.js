"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../../../../../../dist/modules/users/infra/typeorm/entities/User"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Order = (_dec = (0, _typeorm.Entity)('orders'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = (0, _typeorm.Column)(), _dec4 = (0, _typeorm.OneToOne)(() => _User.default, {
  eager: true
}), _dec5 = (0, _typeorm.JoinColumn)({
  name: 'customer_id'
}), _dec6 = (0, _typeorm.Column)({
  type: 'text',
  array: true
}), _dec7 = (0, _typeorm.Column)({
  type: 'bigint'
}), _dec8 = (0, _typeorm.Column)({
  type: 'bigint'
}), _dec9 = (0, _typeorm.CreateDateColumn)(), _dec10 = (0, _typeorm.UpdateDateColumn)(), _dec(_class = (_class2 = class Order {
  id = _initializerWarningHelper(_descriptor, this);
  customer_id = _initializerWarningHelper(_descriptor2, this);
  customer = _initializerWarningHelper(_descriptor3, this);
  books_ordered = _initializerWarningHelper(_descriptor4, this);
  order_total = _initializerWarningHelper(_descriptor5, this);
  delivery = _initializerWarningHelper(_descriptor6, this);
  created_at = _initializerWarningHelper(_descriptor7, this);
  updated_at = _initializerWarningHelper(_descriptor8, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "customer_id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "customer", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "books_ordered", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "order_total", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "delivery", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Order;
exports.default = _default;