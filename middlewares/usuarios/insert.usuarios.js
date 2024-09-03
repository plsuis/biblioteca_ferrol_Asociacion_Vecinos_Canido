const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const insertUsuarios = async (req,res,next)=>{
   
    await isErroOpenBBDD(refBBDD);
    try {
        let datos = {
            tabla:"Usuario",
            campos:Object.keys(req.body),
            valores:Object.values(req.body),
            interrogacions:"?,?,?,?,?"
        }
        let sentencia = sentenciaSql.insertar(datos.tabla,datos.campos,datos.interrogacions)
        let arrayUsuarios = await refBBDD.executar(sentencia,datos.valores,"insertados")
        console.log('... ',arrayUsuarios)
        res.send({
            mensaxe:"insertados"
        })
        

    } catch (error) {
        console.error("Error al consultar los datos: ", error);
    }

   
   
}
module.exports = insertUsuarios