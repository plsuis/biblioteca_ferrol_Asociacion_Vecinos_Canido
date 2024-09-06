const { OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Usuario, AccionsUsuarioBBDD } = require("../../clases/clases.js");
const { datosTablas } = require("../../datos/varios.js");
//const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const modificarUsuarios = async (req,res,next)=>{
  
    //await isErroOpenBBDD(refBBDD);
    //const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        const accion = new AccionsUsuarioBBDD(refBBDD);
        let campos ={
            nome:datosTablas.campos.Usuario[0],
            apelido1:datosTablas.campos.Usuario[1],
            apelido2:datosTablas.campos.Usuario[2],
            dni:datosTablas.campos.Usuario[3],
            rol:datosTablas.campos.Usuario[4],
        }
        let valores = Object.values(req.body)
        valores.push(Object.values(req.body)[3])
        console.log('valores ',valores)
        await accion.actualizar(datosTablas.tablas.Usuario,campos,valores)
        
        res.send({
            mensaxe:"usuarios actualizados"
        })
        

    } catch (error) {
        console.error("Error al insertar o consultar los datos: ", error);
    }

   
   
}
module.exports = modificarUsuarios