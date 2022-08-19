const mysql = require("mysql")
const Database = new mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mbdg",
})

Database.connect(function(err){
    if(err) throw err;
    console.log("Connexion réussi à la base de donnée")
})

module.exports = Database;