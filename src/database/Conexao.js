
function connectToDatabase() {
    const mongoose = require('mongoose');
    mongoose.connect(
        process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    const db = mongoose.connection;
    db.on("error", (error) => console.log("Erro ao conectar ao banco de dados: ", error.message));

    db.once("open", () => {
        console.log("Conectado com o banco")
    });
}

module.exports = connectToDatabase;