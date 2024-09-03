const path = require('path');
const { arquivosBaseDatos, outrabbdd } = require("../bbdd/datos.bbdd.js");
const { BBDD } = require('../bbdd/operacions.js');
const rutaDb = path.resolve(__dirname,`../bbdd/ficheiro/${arquivosBaseDatos.nomefich}`);
const conectoBBDD = outrabbdd(rutaDb);

const refBBDD = new BBDD(conectoBBDD);

module.exports = {
    refBBDD
}