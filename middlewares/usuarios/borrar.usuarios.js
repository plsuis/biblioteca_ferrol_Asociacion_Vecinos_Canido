const { OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Libro } = require("../../clases/clases.js");
//const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const borrarUsuarios = async (req,res,next)=>{
  
    //await isErroOpenBBDD(refBBDD);
    //const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        
        const refLibro = new Libro(refBBDD);//si 
        
        let mensaxeDeLibro = await refLibro.borrar(req,sentenciaSql)
        console.log("mensaxeDeLibro ",mensaxeDeLibro)
        res.send({
            mensaxe:"libros borrados actualizados"
        })
        

    } catch (error) {
        console.error("Error al insertar o consultar los datos: ", error);
    }

   
   
}
module.exports = borrarUsuarios