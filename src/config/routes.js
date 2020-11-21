const express = require("express"); // é um singleton, então sempre retorna o mesmo. Exceto quando faz o instanciamento do tipo express()

// usa o server já instanciado
module.exports = function (server) {
  // API Routes
  const router = express.Router();
  server.use("/api", router); // esse router sempre será chamado quando URL começar com /api

  // TODO Routes
  const todoService = require("../api/todo/todoService");
  todoService.register(router, "/todos"); // metodo register usa todos os metodos de todoService (get, post, put, delete). Dentro do router já será utilizado
};
