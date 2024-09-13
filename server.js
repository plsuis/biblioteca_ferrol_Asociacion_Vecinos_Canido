// ARQUIVOS DE CABECEIRA
const express = require("express");
const path = require("path");
const cors = require("cors");

const { paxinaBiblioteca, paxinaPrestamos, paxinaNovoLibro, paxinaNovoPrestamo, paxinaBibliotecaSenUsuario, paxinaLogueoAdmin, paxinaInicioAdmin, paxinaNovoUsuario } = require("./middlewares/funcions.views");
const { endpoints } = require("./datos/varios.js");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname,"public")))
// MIDDLEWARES
const {
    readLibros,
    insertLibros,
    prestarLibros,
    devolverLibros,
    borrarLibros,
    actualizarLibros,
    buscarLibros,
    prestadosLibros
} = require("./middlewares/libros/index.js");
const {
    readUsuarios,
    insertUsuarios,
    borrarUsuarios,
    actualizarUsuarios
} = require("./middlewares/usuarios/index.js");
const { logueo, comprobarUserToken } = require("./middlewares/helpers.middlewares.js");

const {
    bodyAdministracion,
    bodyNovoLibro
} = require("./controladores/administracion")

// END-POINTS

app.get(endpoints.paxinas.bibliotecaSenUsuario, paxinaBibliotecaSenUsuario); // biblioteca.html
app.get(endpoints.paxinas.logueo, paxinaLogueoAdmin); // login-admin.html
//app.get(endpoints.paxinas.inicioAdmin, comprobarUserToken, paxinaInicioAdmin); // inicio-admin.html
app.get(endpoints.paxinas.inicioAdmin,paxinaInicioAdmin);//páxina BACÍA
app.get(endpoints.xestion.bibliotecaAdmin, paxinaBiblioteca); // biblioteca-admin.html
app.get(endpoints.xestion.usuarios,paxinaNovoUsuario); // crear-usuario.html
app.get(endpoints.xestion.prestamos, paxinaPrestamos); // prestamos-admin.html
app.get(endpoints.paxinas.formularioLibro, paxinaNovoLibro); // novo-libro.html
app.get(endpoints.paxinas.formularioPrestamo, paxinaNovoPrestamo)//novo-prestamo.html

//------------------------ GETTERS
// ---- GETTERS ENVIANDO CONTIDOS DO BODY ----

app.get(endpoints.paxinas.logueados.bodyAdmin,comprobarUserToken,bodyAdministracion);
//app.get(endpoints.paxinas.logueados.bodyNovoLibro,comprobarUserToken,bodyNovoLibro)


// libros

app.get(endpoints.libros.leotodos,readLibros)
app.get(endpoints.libros.buscar,buscarLibros)
app.get(endpoints.libros.prestados,prestadosLibros)

// usuarios

app.get(endpoints.usuario.leotodos,readUsuarios)

//------------------------ POST

//páxinas
app.post(endpoints.paxinas.logueo,logueo);

// libros
app.post(endpoints.libros.insertar,insertLibros);
app.post(endpoints.libros.prestar,prestarLibros)
// usuarios
app.post(endpoints.usuario.insertar,insertUsuarios)

//------------------------ PUTS

//libros
app.put(endpoints.libros.devolver,devolverLibros)
app.put(endpoints.libros.actualizar,actualizarLibros)
//usuarios
app.put(endpoints.usuario.actualizar,actualizarUsuarios)

//------------------------ DELETES

//libros
app.delete(endpoints.libros.borrar,borrarLibros)

//usuarios
app.delete(endpoints.usuario.borrar,borrarUsuarios)

// LISTEN SERVER
app.listen(3000, function () {
    console.log("O SERVIDOR ESTA FUNCIONANDO");
});