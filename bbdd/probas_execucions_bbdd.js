const { Libro } = require("../clases/clases.js");
const { unhabbdd } = require("./datos.bbdd.js");
const { OperacionsBBDD2, BBDD } = require("./operacions.js");
const { sentenciaSql } = require("./sentencias.bbdd.js");



const lecturaDatos = async () => {
    const refBBDD = new BBDD(unhabbdd)//si
    try {
        let devoltoDaCreacion = await refBBDD.creoBaseDatos();//si
        console.log("Base de datos y tablas creadas.",devoltoDaCreacion);
    } catch (error) {
        console.error("Error creando la base de datos: ", error);
        return; // Termina si hay un error
    }
    const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
    try {
        //tabla,campos,interrogacions
        const refLibro = new Libro(operacionBBDD2);//si
        let datosInsertar = {
            tabla:'Libros',
            campos: 'Titulo_libros,Autor_libros,Codigo_libros,Editorial_libros,Anho_edicion_libros',
            interrogacions:'?,?,?,?,?'
        }
        
        let sentencia = sentenciaSql.selecionarTabla("Libros")
        let valores = ['Don Quijote de la Mancha', 'Miguel de Cervantes', 'LIB005', 'Francisco de Robles', '1605'];
        let mensaxe = "...insertado"
        //let valorDevolto2 = await refLibro.executar(sentencia,valores,mensaxe)
        let valorDevolto2 = await refLibro.lista(sentencia)
        console.log('... ',valorDevolto2)
        return valorDevolto2;
        

    } catch (error) {
        console.error("Error al insertar o consultar los datos: ", error);
    }
    
}
//lecturaDatos()
module.exports = lecturaDatos;

/*
(
    async () => {
        const refBBDD = new BBDD(unhabbdd)//si
        try {
            let devoltoDaCreacion = await refBBDD.creoBaseDatos();//si
            console.log("Base de datos y tablas creadas.",devoltoDaCreacion);
        } catch (error) {
            console.error("Error creando la base de datos: ", error);
            return; // Termina si hay un error
        }
        const operacionBBDD2 = new OperacionsBBDD2(refBBDD.baseDeDatos)
        try {
            //tabla,campos,interrogacions
            const refLibro = new Libro(operacionBBDD2);//si
            let datosInsertar = {
                tabla:'Libros',
                campos: 'Titulo_libros,Autor_libros,Codigo_libros,Editorial_libros,Anho_edicion_libros',
                interrogacions:'?,?,?,?,?'
            }
           
            let sentencia = sentenciaSql.selecionarTODO("Libros")
            let valores = ['Don Quijote de la Mancha', 'Miguel de Cervantes', 'LIB005', 'Francisco de Robles', '1605'];
            let mensaxe = "...insertado"
            //let valorDevolto2 = await refLibro.executar(sentencia,valores,mensaxe)
            let valorDevolto2 = await refLibro.lista(sentencia)
            console.log('... ',valorDevolto2)
            

        } catch (error) {
            console.error("Error al insertar o consultar los datos: ", error);
        }
        
    }
)();*/