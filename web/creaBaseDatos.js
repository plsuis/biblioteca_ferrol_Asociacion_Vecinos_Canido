const sqlite3=require('sqlite3').verbose();    //crear/consultas base datos
const path =require('path');

function creaBBDD(){
        //--base de datos--configuracion conexion--
        const  db_name = path.join(__dirname, "db", "baseDatos.db" ); //direccion/path base datos: carpeta "db", archivo "baseDatos.db" , asignamos a la constante 'db_name'
        const db = new sqlite3.Database(db_name, (err)=>{
        if(err){
            return console.error(err.message);
        }else{
            console.log("conexión  con la base de datos");
        }
        }) ; /*crea una instancia de sqlite3 se le pasa el archivo 'db-name' y se asigna a una constante,  se le agrega una funcion
        flecha para comprobar si devuelve algún error la conexion , o se produce exitosamente */


        //--definir base de datos--crear tablas--
        const sql_create = `CREATE TABLE IF NOT EXISTS users(
                            id_user  INTEGER PRIMARY KEY, 
                            name_user  CHAR(150), 
                            pwd  CHAR(50), 
                            email CHAR(50)
                            );

                            CREATE TABLE IF NOT EXISTS biblioteca(
                            id_libro    INTEGER PRIMARY KEY,
                            titulo      CHAR(150),
                            autor       CHAR(150),
                            genero      CHAR(50),
                            editorial   CHAR(50),
                            coleccion   CHAR(50),
                            ISBN        INTEGER
                            );
                            CREATE TABLE IF NOT EXISTS prestamo(
                            id_prestamo INTEGER PRIMARY KEY,
                            titulo     CHAR(150),
                            dni        CHAR(15),
                            nombre     CHAR(50),
                            id_libro_prestamo   INTEGER,
                            FOREIGN KEY (id_libro_prestamo) REFERENCES biblioteca (id_libro)
                            );
                            
                            CREATE TABLE IF NOT EXISTS contactos(
                            id_contacto INTEGER PRIMARY KEY,
                            nombre    CHAR(150),
                            correo    CHAR(150),
                            asunto    CHAR(300),
                            telefono  CHAR(150),
                            mensaje 
                            )`;

// ------------------CREANDO LAS TABLAS------------------------------                   
        
        db.exec(sql_create, (err)=>{//ejecuta/crea las tablas
        if(err){
            return console.error(err.message);
        }else{
            console.log("Tablas creadas satisfactoriamente..");
        }
        });//'exec': crea TODAS las tablas

        return db;

    }

    module.exports = creaBBDD();