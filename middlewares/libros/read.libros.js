const { OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Libro } = require("../../clases/clases.js");
const { datosTablas } = require("../../datos/varios.js");
//const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');
const { refBBDD } = require('../helpers.middlewares.js');

const readLibros = async (req,res,next)=>{
  
    //await isErroOpenBBDD(refBBDD);
    const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        
        const refLibro = new Libro(operacionBBDD2);//si 
        
        let campos = `L.Titulo_Libros,L.Autor_Libros,L.Codigo_Libros,L.Editorial_Libros,L.Anho_edicion_Libros,L.Xenero_Libros,LP.Prestado_Libro_Prestado`;
        let condicion = `L.Codigo_Libros = LP.Codigo_Libros_Libro_Prestado`
        let sentencia = sentenciaSql.selecionarTablasJoinLeft(`Libros as L`,`Libro_Prestado as LP`,campos,condicion)
        let arrayLibros = await refLibro.lista(sentencia)
        arrayLibros.map((libroConInfo)=>{
            if(libroConInfo.Prestado_Libro_Prestado === null){
                libroConInfo.Prestado_Libro_Prestado = 0
            }
            console.log("libroConInfo ",libroConInfo)
            return libroConInfo
        })
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