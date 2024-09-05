// ARQUIVOS DE CABECEIRA
const express = require("express");
const path = require("path");
const cors = require("cors");

const { paxinaBiblioteca, paxinaPrestamos, paxinaNovoLibro, paxinaNovoPrestamo, paxinaBibliotecaSenUsuario, paxinaLogueoAdmin, paxinaInicioAdmin } = require("./middlewares/funcions.views");
const { endpoints } = require("./datos/varios.js");

const app = express();

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
    borrarLibros
} = require("./middlewares/libros/index.js");
const {
    readUsuarios,
    insertUsuarios
} = require("./middlewares/usuarios/index.js")
// END-POINTS

app.get(endpoints.paxinas.bibliotecaSenUsuario, paxinaBibliotecaSenUsuario); // biblioteca.html
app.get(endpoints.paxinas.logueo, paxinaLogueoAdmin); // login-admin.html
app.get(endpoints.paxinas.inicioAdmin, paxinaInicioAdmin); // inicio-admin.html
app.get(endpoints.xestion.bibliotecaAdmin, paxinaBiblioteca); // biblioteca-admin.html
app.get(endpoints.xestion.prestamos, paxinaPrestamos); // prestamos-admin.html
app.get(endpoints.paxinas.formularioLibro, paxinaNovoLibro); // novo-libro.html
app.get(endpoints.paxinas.formularioPrestamo, paxinaNovoPrestamo)//novo-prestamo.html

//------------------------ GETTERS
// libros

app.get(endpoints.libros.leotodos,readLibros)


// usuarios

app.get(endpoints.usuario.leotodos,readUsuarios)

//------------------------ POST

// libros
app.post(endpoints.libros.insertar,insertLibros);
app.post(endpoints.libros.prestar,prestarLibros)
// usuarios
app.post(endpoints.usuario.insertar,insertUsuarios)

//------------------------ PUTS

//libros
app.put(endpoints.libros.devolver,devolverLibros)

//------------------------ DELETES

//libros
app.delete(endpoints.libros.borrar,borrarLibros)

// LISTEN SERVER
app.listen(3000, function () {
    console.log("O SERVIDOR ESTA FUNCIONANDO");
});