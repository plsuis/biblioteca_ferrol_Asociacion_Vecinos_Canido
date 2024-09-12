const path = require('path');
const { arquivosBaseDatos, outrabbdd } = require("../bbdd/datos.bbdd.js");
const { BBDD } = require('../bbdd/operacions.js');
const rutaDb = path.resolve(__dirname,`../bbdd/ficheiro/${arquivosBaseDatos.nomefich}`);
const conectoBBDD = outrabbdd(rutaDb);

const refBBDD = new BBDD(conectoBBDD);

let jwt = require("jsonwebtoken");

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
          let datoParaEncriptar = {Nome:row.Nome_Usuario, Contrasinal:row.DNI_Usuario};
          let token = jwt.sign({user:datoParaEncriptar},process.env.SEGREDO)



          res.send({
            estado: "ok",
            usuario: token,
          });
        }
      },
    );
  };
  
const comprobarUser = (req,res,next,Nome,Contrasinal)=>{
  console.log("Nome ",Nome,"Contrasinal ",Contrasinal);
  let contrasinal = `${Contrasinal}`;
  let nome = `${Nome}`;
  let array = [contrasinal,nome]
  console.log('array ',array)
  conectoBBDD.get(
    `select * from Usuario WHERE DNI_Usuario = ? and Nome_Usuario = ?`,
    array,
    (err, row) => {
      if (err) {
        res.status(500).json({ error: "Error al realizar la consulta" });
        return;
      }

      if (!row) {
        res.status(404).json({ message: "Usuario no encontrado" });
        return;
      }
      if (Contrasinal == row.DNI_Usuario && Nome == row.Nome_Usuario) {
        next();

}
})}

const comprobarUserToken = (req, res, next)=>{
const {authorization} = req.headers;
console.log("authoriza...",authorization)
//res.send({mensaxe:'comprobando cambeceiras'})
if (!authorization){
  const error = new Error("Falta a cabeceira da autorizacion");
  error.httpStatus = 401;
  throw error;
}
let tokenInfo;
tokenInfo = jwt.verify(authorization, process.env.SEGREDO);
console.log("token info ",tokenInfo)
//res.send({mensaxe:'comprobando cambeceiras'})
comprobarUser (req,res,next,tokenInfo.user.Nome, tokenInfo.user.Contrasinal);
}

module.exports = {
    refBBDD,
    logueo,
    comprobarUserToken
}