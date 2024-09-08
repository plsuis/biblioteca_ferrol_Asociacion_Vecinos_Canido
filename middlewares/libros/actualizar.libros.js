const { OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Usuario, AccionsUsuarioBBDD, AccionsLibroBBDD } = require("../../clases/clases.js");
const { datosTablas } = require("../../datos/varios.js");
//const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const actualizarLibros = async (req,res,next)=>{
  
    //await isErroOpenBBDD(refBBDD);
    //const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        const accion = new AccionsLibroBBDD(refBBDD);
        let campos ={
            titulo:datosTablas.campos.Libros[0],
            autor:datosTablas.campos.Libros[1],
            codigo:datosTablas.campos.Libros[2],
            editorial:datosTablas.campos.Libros[3],
            ano:datosTablas.campos.Libros[4],
            xenero:datosTablas.campos.Libros[5]
        }
        let valores = Object.values(req.body)
        valores.push(req.query.codigo)
        console.log('req.query.codigo ',req.query.codigo,'valores ',valores)
        await accion.actualizar(datosTablas.tablas.Libros,campos,valores)
        
        res.send({
            mensaxe:"libro actualizados"
        })
        

    } catch (error) {
        console.error("Error al actualizar los datos: ", error);
    }

   
   
}
module.exports = actualizarLibros