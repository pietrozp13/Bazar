var pg = require("pg-promise")();

var connectionString = "postgres://postgres:123456@localhost:5432/Projeto Bazar";

var pgp = pg(connectionString);



const main = async function () {
    var query = await pgp.query("SELECT * from bazar ");
    console.log(query)
};

main().then(() => {console.log("fim");}).catch( (error) => console.log(error));