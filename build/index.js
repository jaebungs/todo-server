"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

// import "core-js/stable";
// import "regenerator-runtime";
var PORT = process.env.PORT || 4000;

_app["default"].listen(PORT, function () {
  console.log("server started on ".concat(PORT));
});