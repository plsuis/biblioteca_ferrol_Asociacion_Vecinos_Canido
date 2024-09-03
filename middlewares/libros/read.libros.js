const { OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Libro } = require("../../clases/clases.js");
const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const readLibros = async (req,res,next)=>{
  
    await isErroOpenBBDD(refBBDD);
    const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        
        const refLibro = new Libro(operacionBBDD2);//si 
        let sentencia = sentenciaSql.selecionarTODO("Libros")
        let arrayLibros = await refLibro.lista(sentencia)
        console.log('... ',arrayLibros)
        res.send({
            lista:arrayLibros
        })
        

    } catch (error) {
        console.error("Error al insertar o consultar los datos: ", error);
    }

   
   
}
//readLibros()
module.exports = readLibros