const Mongoose = require("mongoose");
class Client extends Mongoose.Schema {
  constructor() {
    super({
      name: {
        type: String,
        required: true,
      },
      endereco: {
        type: String,
        required: false,
      },
    
      cell: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      
      ativo: {
        type: Boolean,
        required: true,
      },
    });

    //Registrando Schema no Mongoose
    Mongoose.model("Client", this);
  }
}

module.exports = Client;
