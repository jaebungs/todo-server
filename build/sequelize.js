"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var sequelize = new _sequelize["default"](process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
  host: process.env.SQL_HOST,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});
exports.sequelize = sequelize;
sequelize.authenticate().then(function () {
  console.log('connection has been established.');
})["catch"](function (err) {
  console.log('Unable to connect to the database', err);
});