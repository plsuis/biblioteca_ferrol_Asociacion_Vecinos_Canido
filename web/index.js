//--librerias y dependencias--//
const http=require('http');          //gestion de archivos web 
const express=require('express');    //generar la aplicacion
const app=express();                 //instancia del paquete express
//const sqlite3=require('sqlite3').verbose();    //crear/consultas base datos//******************base datos */
                        /*verbose(): permite obtener información en caso de ocurrir algún error en base datos*/
const path =require('path');         //gestionar las rutas de los diferentes recursos (paginas, etc.)


//settings  
app.set("nombreAplicacion", "Biblioteca");
app.set("puerto", 5000); //a la escucha en el puerto 5000


//--recursos--
  /*directorios donde van a estar la páginas webs, multimedia, archivos de estilo */
app.use(express.static(__dirname + '')); //archivo estático de recursos index 
  /*dentro de la carpeta 'web' todos están al mismo nivel, podríamos crear una carpeta 
  'public' que contuviera las otras carpetas 'css-db-img-js' */


//--configurar el servidor--
app.set("view engine", "ejs"); //utilizamos un motor de plantilla //definimos el tipo de archivos que va a tener la aplicacion
  /*'ejs': quiere decir el archivo va a tener javascript embebido (se añadió el paquete 'ejs' de un proyecto vacio) */
  /*definimos el directorio en que van a estar estos archivos 'ejs'
   establece el motor de plantilla con archivos 'ejs'*/

app.set("views", path.join(__dirname,"paginas")); //archivos ejs en el directorio  RAIZ en 'web' //+++**SE AÑADIÓ LA CARPETA "paginas"**+++
/**con esto conseguimos meter la páginas dentro del la carpeta páginas, pero no podemos meter el resto de las carpetas publicas */
  /*linea superior permite gestionar las rutas de los diferentes recursos de la aplicacion */

app.use(express.urlencoded({extended:false})); //urlencode: permite recuperar los valores publicados en un "request"
  /*express.urlencoded: MIDDLEWARE */

app.listen(app.get('puerto'));  
console.log(`Servidor  ${app.get('nombreAplicacion')}, corriendo en el puerto ${app.get('puerto')}`); 





//--base de datos--configuracion conexion*********INICIO***************************************************************************
/*const  db_name = path.join(__dirname, "db", "baseDatos.db" );   //direccion/path base datos: carpeta "db", archivo "baseDatos.db" , asignamos a la constante 'db_name'
const db =new sqlite3.Database(db_name, (err)=>{
   if(err){
      return console.error(err.message);
   }else{
     console.log("conexión  con la base de datos");
   }
}) ; */
/*crea una instancia de sqlite3 se le pasa el archivo 'db-name' y se asigna a una constante,  se le agrega una funcion
flecha para comprobar si devuelve algún error la conexion , o se produce exitosamente */


//--definir base de datos--crear tablas--
/*const sql_create = `CREATE TABLE IF NOT EXISTS users(
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
                     )`;*/
/* ------------------CREANDO LAS TABLAS------------------------------ 
//---------------------DESCARTADA------------------------------                 
db.run(sql_create, (err)=>{//ejecuta/crea las tablas//---------
    if(err){---------------------------------------------------
      return console.error(err.message);-----------------------
    }else{-----------------------------------------------------
      console.log("Tablas creadas exino------------------------
//'run': solo CREA una tabla (la primera)----------------------
-----------------------DESCARTADA------------------------------*/ 

/*
db.exec(sql_create, (err)=>{//ejecuta/crea las tablas
  if(err){
    return console.error(err.message);
  }else{
    console.log("Tablas creadas satisfactoriamente..");
  }
}); */          //'exec': crea TODAS las  o.k.
//+++++++++++++++++++++++++++BADE DATOS+++++++++++++++++++++++++++++++++FINAL+++++++++++++++++++++++++++++++++++++++++++++++++++



const db = require("./creaBaseDatos.js"); //importa base de datos

//---------------enrutamiento--(entre páginas)------------------------
app.get('/', (req,res)=> {  //cuando estemos en la raiz '/'
      res.render('index.ejs');//la primera página que va a responder es 'index.ejs' 
      /*el método 'render' sirve para trabajar con los motores de plantillas 'archivos.ejs'*/
      /*enruta la primera página */
});


//--barra menus: tabla libros, tabla prestamos, consultas libros, consultas prestamos------

//a la pagina 'lista_libros' (muestra lista y boton añadir libro)
app.get('/lista_libros', (req, res)=> {
  const sql="SELECT * FROM biblioteca ORDER BY titulo";  //query a base de datos
  db.all(sql, [], (err, rows)=>{       //mostrar contenido base datos
      if(err){
        return console.error(err.message);          //error
      }else{
        res.render('lista_libros.ejs', {modelo:rows});   //todo o.k. , despliega la página,y  genera el objeto  'modelo:clave, rows:valores'
      }
  });
});

//a la pagina consulta libros :muestra el listado de los libros existentes
app.get('/consulta_libros', (req, res) =>{
  const sql ="SELECT * FROM biblioteca ORDER BY titulo";
  db.all(sql, [], (err, rows)=>{    //ejecuta la consulta
     if(err){ //se produce un error
        return console.error(err.message);  //envia el error y abandona el programa
     }else{
        res.render('consulta_libros.ejs', {modelo:rows});   //renderiza la página y envia objeto con los registros de la bd
     }
  });
});
//-----------------INICIO-----------CREAR LIBRO------------------------------------------------------
//crear nuevo registro y genera un modelo para contener los datos
app.get("/crearLibro", (req, res) => {          //leer datos
  res.render('crearLibro.ejs', {modelo: {}});
})

app.post("/crearLibro", (req,res)=>{//método 'post' en 'crearLibro' para escribir la base de datos
  const sql="INSERT INTO biblioteca(titulo, autor, genero, editorial,coleccion, ISBN) VALUES (?,?,?,?,?,?)";   //query/consulta
  const nuevo_libro = [req.body.titulo, req.body.autor, req.body.genero, req.body.editorial, req.body.coleccion, req.body.ISBN]; //datos
  //const nuevo_libro = ["Don Quijote", "Cervantes", "aventuras", "marcombo", "el quijote", 1234567]; //carga manual (CONTROL)

  db.run(sql , nuevo_libro, (err) =>{//ejecuta la consulta(sql) values(nuevo_libro) en la base datos 
     if(err){
        return console.error("mensaje error: ",err.message);  //muestra error
      }else{
        console.log("LIBRO CREADO")//----CONTROL------
        res.redirect("/lista_libros");  //redirecciona (path) de la pagina
      }
  });
});
//*****************FINAL***************CREAR LIBRO***********************************************************

 
//----------INICIO-----------EDITAR----------------------------------------------------------------------------
//editar/modificar base datos, recibe direccion mas el número de registro (id) --LEE REGISTRO--
app.get('/editarLibro/:id' , (req, res) => {      //a la página 'editarLibro.ejs'//leer datos//edit/id
  const id = req.params.id;                       //almacena el 'id' recibido
  const sql ="SELECT * FROM biblioteca WHERE id_libro = ? ";  //almacena la sentencia sql- SELECT->LECTURA REGISTRO--
  db.get(sql,id,(err, rows ) => {                     //función que renderiza la página modificada (parametros: el id, el contenido del registro, funcion flecha)
     res.render("editarLibro.ejs", {modelo: rows});            // objeto {modelo: clave, rows: valor}
  });
});

app.post('/editarLibro/:id',(req,res)=> {     //escribir datos (recibe dirección mas el id del registro)--MODIFICA REGISTRO--
    const id=req.params.id;  //id del registro
    //info_libro: contine los valores modificados del registro, finalmente el id para identificar el número de registro
    const info_libro =[req.body.titulo, req.body.autor, req.body.genero, req.body.editorial, req.body.coleccion, req.body.ISBN, id];      //necesita el 'id' para la modificacion -NO LE LLEGA INFORMACION-
    //UPDATE-> MODIFICA REGISTRO       
    const sql= `UPDATE biblioteca                     
                SET titulo = ?, autor = ?, genero = ?, editorial = ?, coleccion = ?, ISBN = ?
                WHERE (id_libro = ?)`;
    db.run(sql, info_libro, (err) =>{
      if(err){
          return console.error(err.message);
      }else{
          res.redirect("/lista_libros");  //si todo O.K. volvemos a 'lista_libros.ejs'
      }
    });
});
//********************FINAL****************EDITAR**********************************************************************

//-------------------INICIO---------------ELIMINAR--REGISTROS-------------------------------------------------------------------
//get/eliminar/id
app.get('/eliminarLibro/:id' , (req, res) => {                //a la página 'editarLibro.ejs'//leer datos//edit/id
  const id = req.params.id;                                   //almacena el 'id' recibido
  const sql ="SELECT * FROM biblioteca WHERE id_libro = ? ";  //almacena la sentencia sql- SELECT->LECTURA REGISTRO--
  db.get(sql,id,(err, rows ) => {                             //función que renderiza la página modificada (parametros: el id, el contenido del registro, funcion flecha)
     res.render("eliminarLibro.ejs", {modelo: rows});         // objeto {modelo: clave, rows: valor}
  });
});
//post/eliminar/id
app.post('/eliminarLibro/:id',(req,res)=> {     //escribir datos (recibe dirección mas el id del registro)--MODIFICA REGISTRO--
  const id=req.params.id;
  //UPDATE-> MODIFICA REGISTRO       
  const sql= `DELETE FROM biblioteca WHERE (id_libro = ?)`;
  db.run(sql, id , (err) =>{
    if(err){
        return console.error(err.message);
    }else{
        res.redirect("/lista_libros");  //si todo O.K. volvemos a 'lista_libros.ejs'
    }
  });
});


//*******************FINAL***************ELIMINAR**********************************************************************


//------------------------inicio --------------------crear prestamos-------------------------------------------------

app.get("/lista_prestamos", (req, res)=> {
  const sql="SELECT * FROM prestamo ORDER BY titulo";  //query a base de datos
  db.all(sql, [], (err, rows)=>{       //mostrar contenido base datos
      if(err){
        return console.error(err.message);          //error
      }else{
        //console.log("CONTROL enviando lista prestamos :", rows );  //CONTROL
        res.render('lista_prestamos.ejs', {modelo:rows});   //todo o.k. , despliega la página,y  genera el objeto  'modelo:clave, rows:valores'
      }
  });
});
 
app.get("/consulta_prestamos", (req,res)=> {
  const sql ="SELECT * FROM prestamo ORDER BY titulo";
  db.all(sql, [], (err, rows)=>{    //ejecuta la consulta
     if(err){ //se produce un error
        return console.error(err.message);  //envia el error y abandona el programa
     }else{
        res.render('consulta_prestamos.ejs', {modelo:rows});   //renderiza la página y envia objeto con los registros de la bd
     }
  });
});

app.get("/crearPrestamo",(req,res)=>{
  res.render('crearPrestamo.ejs',{modelo:{}});
})

app.post("/crearPrestamo", (req,res)=>{//método 'post' en 'crearPrestamos' para escribir la base de datos
  const sql="INSERT INTO prestamo(titulo, dni, nombre , id_libro_prestamo) VALUES (?,?,?,?)";   //query/consulta
  const nuevo_prestamo = [req.body.titulo, req.body.dni, req.body.nombre, req.body.id_libro_prestamo]; //datos

  db.run(sql , nuevo_prestamo, (err) =>{//ejecuta la consulta(sql) values(nuevo_libro) en la base datos 
     if(err){
        return console.error("ERROR-:CREAR PRESTAMO ",err.message);  //muestra error
      }else{
        //console.log("CCONTROL todo O.K. PRESTAMO CREADO")//----CONTROL------
        res.redirect("/lista_prestamos");  //redirecciona (path) de la pagina
      }
  });
});

app.get('/eliminarLibroPrestamo/:id', (req, res)=> {
  const id = req.params.id;                                   
  const sql ="SELECT * FROM prestamo WHERE id_prestamo = ? ";
  db.get(sql,id,(err, rows ) => {   
    //console.log("CONTROL eliminar libro prestamos : ", rows) ;                         
     res.render("eliminarLibroPrestamo.ejs", {modelo: rows});        
  });
});

app.post('/eliminarLibroPrestamo/:id', (req, res)=> {
  const id=req.params.id;
  //UPDATE-> MODIFICA REGISTRO       
  const sql= `DELETE FROM prestamo WHERE id_prestamo = ?`;
  db.run(sql, id , (err) =>{
    if(err){
        return console.error(err.message);
    }else{
        res.redirect("/lista_prestamos");  
    }
  });
});

//************************final *************************prestamos***************************************************** */
//-------------------------------------------------

app.get("/contacto", (req,res)=>{
  res.render("contacto.ejs");
});

app.get("/listaContacto", (req,res)=>{
  res.render("listaContactos.ejs");
});


//-----------------------------------------------------//

/*esta runta/método (pagina no encontrada) tiene que ir siempre al final
para evitar que pueda activase con una dirección válida*/
app.get('/*', (req, res)=>{
  res.render("notfound.ejs");
});