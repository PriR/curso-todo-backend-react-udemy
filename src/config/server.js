const port = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require("./cors"); // allow cors

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors); // allow cors

server.listen(port, function () {
  console.log(`Backend is running on port ${port}`);
});

module.exports = server; // será utilizado no loader.js
