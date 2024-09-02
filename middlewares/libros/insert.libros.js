const path = require('path');
const { BBDD, OperacionsBBDD2 } = require("../../bbdd/operacions.js");
const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Libro } = require("../../clases/clases.js");
const { arquivosBaseDatos, outrabbdd } = require("../../bbdd/datos.bbdd.js");
const { isErroOpenBBDD } = require('../../bbdd/helpers.bbdd.js');

const insertLibros = async (req,res,next)=>{
    
    const rutaDb = path.resolve(__dirname,`../../bbdd/ficheiro/${arquivosBaseDatos.nomefich}`)
    const conectoBBDD = outrabbdd(rutaDb);
    const refBBDD = new BBDD(conectoBBDD);

    await isErroOpenBBDD(refBBDD);
    const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        
        const refLibro = new Libro(operacionBBDD2);//si 
        //tabla,campos,interrogacions
        let datos = {
            tabla:"Libros",
            campos:Object.keys(req.body),
            valores:Object.values(req.body),
            interrogacions:"?,?,?,?,?"
        }
        
        let sentencia = sentenciaSql.insertar(datos.tabla,datos.campos,datos.interrogacions)
        let arrayLibros = await refLibro.executar(sentencia,datos.valores,"insertados")
        console.log('... ',arrayLibros)
        res.send({
            mensaxe:"insertados"
        })
        

    } catch (error) {
        console.error("Error al insertar o consultar los datos: ", error);
    }

   
   
}
//readLibros()
module.exports = insertLibros