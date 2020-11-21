const server = require("./config/server");

require("./config/database");
require('./config/routes')(server) // é passado como parametro e passado para function no routes.js. 