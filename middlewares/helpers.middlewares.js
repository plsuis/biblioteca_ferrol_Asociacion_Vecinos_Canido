const path = require('path');
const { arquivosBaseDatos, outrabbdd } = require("../bbdd/datos.bbdd.js");
const { BBDD } = require('../bbdd/operacions.js');
const rutaDb = path.resolve(__dirname,`../bbdd/ficheiro/${arquivosBaseDatos.nomefich}`);
const conectoBBDD = outrabbdd(rutaDb);

const refBBDD = new BBDD(conectoBBDD);


const logueo = (req, res) => {
    const { Nome_Usuario, DNI_Usuario } = req.body;
  
    console.log("Nome_Usuario, DNI_Usuario ", Nome_Usuario, DNI_Usuario);
    conectoBBDD.get(
      "select * from Usuario WHERE DNI_Usuario = ? and Nome_Usuario = ?",
      [DNI_Usuario, Nome_Usuario],
      (err, row) => {
        if (err) {
          res.status(500).json({ error: "Error al realizar la consulta" });
          return;
        }
  
        if (!row) {
          res.status(404).json({ message: "Usuario no encontrado" });
          return;
        }
        if (DNI_Usuario == row.DNI_Usuario && Nome_Usuario == row.Nome_Usuario) {
          res.send({
            estado: "ok",
            usuario: {
              nome: row.Nome_Usuario,
            },
          });
        }
      },
    );
  };
  



module.exports = {
    refBBDD,
    logueo
}