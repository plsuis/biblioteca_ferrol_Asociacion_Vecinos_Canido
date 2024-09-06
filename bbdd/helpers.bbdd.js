const isErro = (err) => {
                if (err) {
                    console.error(err.message);
                }
                console.log("conectado ...");
            }
 const isErroOpenBBDD = async (refBBDD)=>{
    try {
        let devoltoDaCreacion = await refBBDD.creoBaseDatos();//si
        console.log("Base de datos y tablas creadas.",devoltoDaCreacion);
    } catch (error) {
        console.error("Error creando la base de datos: ", error);
        return; // Termina si hay un error
    }
} 
module.exports = {
    isErro,
    isErroOpenBBDD
}