const { OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Usuario, AccionsUsuarioBBDD } = require("../../clases/clases.js");
const { datosTablas } = require("../../datos/varios.js");
//const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const borrarUsuarios = async (req,res,next)=>{
  
    //await isErroOpenBBDD(refBBDD);
    //const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        const {dni} = req.query
               
        const refUsuario = new Usuario(); 
        refUsuario.novoDniUsuario = dni;
        const accion = new AccionsUsuarioBBDD(refBBDD);
        await accion.borrar(datosTablas.tablas.Usuario,datosTablas.campos.Usuario[3],refUsuario.dniUsuario)
        console.log("mensaxeDaAccionBorrar ")
        res.send({
            mensaxe:"libros borrados actualizados"
        })
        

    } catch (error) {
        console.error("Error al insertar o consultar los datos: ", error);
    }

   
   
}
module.exports = borrarUsuarios