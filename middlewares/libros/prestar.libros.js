/**
 * Este middleware utilízase para realizar o préstamo dun libro
 * 
 * Os datos virán a través de parámetros da URL,por exemplo:
 * http://localhost:3000/prestar-libro/?fechaDesde=2024-09-04&fechaHasta=2024-09-11&codigo=LIB011
 * recolléndoos como 'req.query', sendo os seguintes:
 * 
 * > fechaDesde,fechaHasta,codigo
 * 
 * Ao mesmo tempo, neste caso puntual, estamos a introducir o DNI no body que ven dende o cliente,
 * é dicir, 'req.body.dni'
 * 
 * A través da clase Libro executaremos o método de prestarLibro que contén toda da lóxica, ao mesmo tempo,
 * estamos a introducir a bbdd de referencia onde contén unha serie de métodos que un deles
 * utilizámolo no método 'prestarLibro' (tal vez sexa cambiado)
 * 
 */

const { sentenciaSql } = require("../../bbdd/sentencias.bbdd.js");
const { Libro } = require("../../clases/clases.js");
const { refBBDD } = require('../helpers.middlewares.js');

const prestarLibros = async (req,res,next)=>{
    
    try {
        console.log("Datos que recibo en req.query: ",req.query)
        //inserto o DNI en 'req'
        
        const refLibro = new Libro(refBBDD);
        let executado = await refLibro.prestarLibro(req,sentenciaSql)
        console.log("executado ",executado)
      
        res.send({
            mensaxe:"libro prestado"
        })
        

    } catch (error) {
        console.error("Error al consultar los datos: ", error);
    }

   
   
}
module.exports = prestarLibros