const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Libro } = require("../../clases/clases.js");
//const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const devolverLibros = async (req,res,next)=>{

    //await isErroOpenBBDD(refBBDD);
    
    try {
        
        const refLibro = new Libro(refBBDD);//si 
        
        let mensaxeDeLibro = await refLibro.devolver(req,sentenciaSql)
        console.log("mensaxeDeLibro ",mensaxeDeLibro)
        res.send({
            mensaxe:"libros prestados actualizados"
        })
        

    } catch (error) {
        console.error("Error al insertar o consultar los datos: ", error);
    }

   
   
}
//readLibros()
module.exports = devolverLibros