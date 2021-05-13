const Mongoose = require("mongoose");
const Count = Mongoose.model("Count");

class CountController{

    static async getAll(_req, res) {
        console.log("[Count CONTROLLER] :CHAMOU O MÉTODO BUSCAR TODOS");
        try {
        res.json(await Count.find({}));
        } catch (error) {
        console.log("[CARTEIRA CONTROLLER] : buscarTodos => " + error);
        res.status(500).send("Erro ao buscar Carteira!");
        }
    }
    //adicionar 
    static async create(req, res) {
        try {
        const teste = req.body;
        console.log(
        "[CLIENT CONTROLLER] : CHAMOU O MÉTODO ADICIONAR" +
        "\n PARÂMETRO: " +
        JSON.stringify(teste)
        );
        res.status(201).json(await Count.create(teste));
        } catch (error) {
        res.status(500).send("Erro ao inserir novo teste: " + error);
        }
        } 

    //editar
    //ativarInativar
    //deletarTudo
}

module.exports = CountController;