const Mongoose = require("mongoose");
class Count extends Mongoose.Schema {
  constructor() {
    super({
      receptor: {
        type: String,
        required: true,
      },
      value: {
        type:Number,
        required: false,
      },
    
      type: {
        type: String,
        enum: ['despesa', 'receita'],
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
         
      paid: {
        type: Boolean,
        required: true,
      },
    });

    //Registrando Schema no Mongoose
    Mongoose.model("Count", this);
  }
}

module.exports = Count;
