"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeedBooks1599417095935 = void 0;

var _typeorm = require("typeorm");

class SeedBooks1599417095935 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'books',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'title',
        type: 'varchar'
      }, {
        name: 'author',
        type: 'varchar'
      }, {
        name: 'price',
        type: 'decimal'
      }, {
        name: 'bookCoverUrl',
        type: 'varchar'
      }, {
        name: 'category',
        type: 'varchar'
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
  }

  async down(queryRunner) {
    await queryRunner.dropTable('books');
  }

}

exports.SeedBooks1599417095935 = SeedBooks1599417095935;