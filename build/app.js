"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _todo = require("./routes/todo.js");

// import "core-js/stable";
// import "regenerator-runtime";
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));

_dotenv["default"].config(); // routing


app.get('/', _todo.getTodo);
app.post('/', _todo.createTodo);
app.patch('/update', _todo.updateTodo);
app["delete"]('/delete/:id', _todo.deleteTodo);
var _default = app;
exports["default"] = _default;