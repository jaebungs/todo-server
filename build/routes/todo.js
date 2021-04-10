"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTodo = exports.deleteTodo = exports.getTodo = exports.createTodo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _sequelize2 = require("../sequelize.js");

var Todo = _sequelize2.sequelize.define('Todo', {
  title: {
    type: _sequelize["default"].STRING
  },
  description: {
    type: _sequelize["default"].STRING
  }
});

var createTodo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              _sequelize2.sequelize.sync().then(function () {
                Todo.create({
                  title: req.body.title,
                  description: req.body.description
                }).then(function (data) {
                  res.send(data);
                  console.log('Todo added');
                })["catch"](function () {
                  res.status(500).json({
                    message: 'Creat Todo Failed.'
                  });
                  console.log('Todo creating failed. Something wrong.');
                });
              });
            } catch (err) {
              res.status(500).json({
                message: 'Creat Todo Failed.'
              });
              console.log(err);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createTodo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTodo = createTodo;

var getTodo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              Todo.findAll().then(function (data) {
                res.status(200).json(data);
              });
            } catch (err) {
              res.status(500).json({
                message: 'Creat Todo Failed.'
              });
              console.log(err);
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTodo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTodo = getTodo;

var deleteTodo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              Todo.destroy({
                where: {
                  id: req.params.id
                }
              }).then(function () {
                res.status(200).send({
                  message: "Deleting ".concat(req.body.id, " was succssful.")
                });
              });
            } catch (err) {
              res.status(500).json({
                message: 'Delete Todo Failed.'
              });
              console.log(err);
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteTodo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTodo = deleteTodo;

var updateTodo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              Todo.update({
                title: req.body.title,
                description: req.body.description
              }, {
                where: {
                  id: req.body.id
                }
              }).then(function (data) {
                res.status(200).json(data);
              });
            } catch (err) {
              res.status(500).json({
                message: 'Update todo Failed.'
              });
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateTodo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateTodo = updateTodo;