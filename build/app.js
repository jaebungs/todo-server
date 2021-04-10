"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/stable");

require("regenerator-runtime");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _todo = require("./routes/todo.js");

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));

_dotenv["default"].config(); // routing


app.get('/', _todo.getTodo);
app.post('/', _todo.createTodo);
app.patch('/update', _todo.updateTodo);
app["delete"]('/delete', _todo.deleteTodo);
app.listen(PORT, function () {
  console.log("server started on ".concat(PORT));
});