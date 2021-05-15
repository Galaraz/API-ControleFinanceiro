const Mongoose = require("mongoose");
class Client extends Mongoose.Schema {
  constructor() {
    super({
      fullName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: false,
      },
    
      mobile: {
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
