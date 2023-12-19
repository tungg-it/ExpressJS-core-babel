"use strict";

var _dotenv = require("dotenv");
(0, _dotenv.config)();
var configApp = {
  port: process.env.PORT,
  database: {
    url: process.env.MONGODB_URL
  }
};
module.exports = configApp;