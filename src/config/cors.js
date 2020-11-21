module.exports = function (req, res, next) { // adiciona cabeçalhos a serem enviados na resposta para o browser para dizer que é permitido acessar nessas condições
  // next chain of responsability
  res.header("Access-Control-Allow-Origin", "*"); // ao inves de * colocar os clientes que irão consumir da API
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next(); // para continuar o fluxo da aplicação até que alguém retorne para o browser
};
