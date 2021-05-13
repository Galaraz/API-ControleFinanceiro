const CountController = require("../Controller/CountController");

class CountRoute {
  constructor(app) {
    //Definições das outras rotas

    app
      .route("/conta")
      .get(CountController.getAll)
      .post(CountController.create)
    
  }
}

module.exports = CountRoute;