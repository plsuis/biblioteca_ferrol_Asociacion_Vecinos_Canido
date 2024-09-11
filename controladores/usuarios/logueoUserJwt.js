const { AccionsUsuarioBBDD } = require("../../clases/clases");
const { datosTablas } = require("../../datos/varios");
const { refBBDD } = require("../../middlewares/helpers.middlewares");

const logueoUserJwt = async (req,res,next) => {
    const {nome,dni} = req.body;
    console.log("req.body ",req.body);
    try{
        
         let campos = {
            nome:datosTablas.campos.Usuario[0],
            dni:datosTablas.campos.Usuario[3]
        }
        let valores = [nome,dni];
        const accion = new AccionsUsuarioBBDD(refBBDD);
        let datoBuscado = await accion.buscar(datosTablas.tablas.Usuario,campos,req.body) 
        console.log("dato buscado ",datoBuscado)
        res.send({
            mensaxe:"usuario atopado",
        })

    }catch(error){
        console.error("error en logueoUserJwt",error)
    }
}

module.exports = logueoUserJwt;