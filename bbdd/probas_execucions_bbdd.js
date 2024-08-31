const { unhabbdd } = require("./datos.bbdd.js");
const { OperacionsBBDD2, BBDD } = require("./operacions.js");
const { sentenciaSql, valores } = require("./sentencias.bbdd.js");


(
    async () => {
        const refBBDD = new BBDD(unhabbdd)
        const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
        try {
            //let devoltoDaCreacion = await refBase1.creoBaseDatos2();
            let devoltoDaCreacion = await refBBDD.creoBaseDatos2();
            console.log("Base de datos y tablas creadas.",devoltoDaCreacion);
        } catch (error) {
            console.error("Error creando la base de datos: ", error);
            return; // Termina si hay un error
        }

        try {
            
            /*let valorDevolto = await operacionBBDD.insertar(sentenciaSql,valores);
            console.log('... ',valorDevolto)*/
            let valorDevolto2 = await operacionBBDD2.insertar(sentenciaSql,valores)
            console.log('... ',valorDevolto2)
            // Consultar para verificar la inserción
            /*
            const consultaSql = `SELECT * FROM Libros `;
            const resultado = await operacionBBDD.consultar(consultaSql);
            console.log("Resultado de la consulta:", resultado);
            */
        } catch (error) {
            console.error("Error al insertar o consultar los datos: ", error);
        }
    }
)();