const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { refBBDD } = require('../helpers.middlewares.js');

const readUsuarios = async (req,res,next)=>{

    try {
        
        let sentencia = sentenciaSql.selecionarTabla("Usuario")
        let arrayUsuarios = await refBBDD.consultar(sentencia)
        console.log('... ',arrayUsuarios)
        res.send({
            lista:arrayUsuarios
        })
        

    } catch (error) {
        console.error("Error al consultar los datos: ", error);
    }

   
   
}
module.exports = readUsuarios