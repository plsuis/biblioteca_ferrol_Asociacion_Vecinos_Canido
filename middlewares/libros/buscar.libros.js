const { OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Usuario, AccionsUsuarioBBDD, AccionsLibroBBDD } = require("../../clases/clases.js");
const { datosTablas } = require("../../datos/varios.js");
//const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD, novoTitulo } = require('../helpers.middlewares.js');

const buscarLibros = async (req,res,next)=>{
  
    //await isErroOpenBBDD(refBBDD);
    //const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        const accion = new AccionsLibroBBDD(refBBDD);
        let campos ={
            titulo:datosTablas.campos.Libros[0]
        }
        let valores = req.query.textoTitulo//esta titulo terá que vir dende o cliente sen espacios no inicio e final ==> string.trim()
        
        let libros = await accion.buscar(datosTablas.tablas.Libros,campos,`'%${novoTitulo(valores)}%'`)
        console.log("libros ",libros)
        res.send({
            mensaxe:libros
        })
        

    } catch (error) {
        console.error("Error al actualizar los datos: ", error);
    }

   
   
}
module.exports = buscarLibros