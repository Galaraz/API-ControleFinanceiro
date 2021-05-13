const ClientController = require("../Controller/ClientController");

class ClientRoute {
  constructor(app) {
    //Definições das outras rotas

    app
      .route("/client")
      .get(ClientController.getAll)
      .post(ClientController.create)
    
  }
}

module.exports = ClientRoute;
