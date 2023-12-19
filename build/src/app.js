"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _configApp = _interopRequireDefault(require("./config/configApp"));
var app = (0, _express["default"])();
var port = _configApp["default"].port;
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(port, function () {
  console.log("Application listening at http://localhost:".concat(port));
});