"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOrders1599600661538 = void 0;

var _typeorm = require("typeorm");

class CreateOrders1599600661538 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'orders',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'customer_id',
        type: 'uuid'
      }, {
        name: 'books_ordered',
        type: 'text[]'
      }, {
        name: 'order_total',
        type: 'decimal'
      }, {
        name: 'delivery',
        type: 'decimal'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
    await queryRunner.createForeignKey('orders', new _typeorm.TableForeignKey({
      columnNames: ['customer_id'],
      referencedTableName: 'users',
      referencedColumnNames: ['id'],
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('orders');
  }

}

exports.CreateOrders1599600661538 = CreateOrders1599600661538;