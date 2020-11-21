const Todo = require("./to@do");

Todo.methods(["get", "post", "put", "delete"]); // a ser habilitado pela api pelo node-restful
Todo.updateOptions({ new: true, runValidators: true }); // new: quando atualiza o cliente e recebe o antigo e não o novo, runValidators: aplicar as validações colocadas no schema

module.exports = Todo;
