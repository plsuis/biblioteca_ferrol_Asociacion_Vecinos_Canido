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

// END-POINTS

app.get(endpoints.paxinas.bibliotecaSenUsuario, paxinaBibliotecaSenUsuario); // biblioteca.html
app.get(endpoints.paxinas.logueo, paxinaLogueoAdmin); // login-admin.html
app.get(endpoints.paxinas.inicioAdmin, paxinaInicioAdmin); // inicio-admin.html
app.get(endpoints.xestion.bibliotecaAdmin, paxinaBiblioteca); // biblioteca-admin.html
app.get(endpoints.xestion.prestamos, paxinaPrestamos); // prestamos-admin.html
app.get(endpoints.formularios.formularioLibro, paxinaNovoLibro); // novo-libro.html
app.get(endpoints.formularios.formularioPrestamo, paxinaNovoPrestamo)//novo-prestamo.html
// GETTERS

// PUTS

// DELETES


// LISTEN SERVER
app.listen(3000, function () {
    console.log("O SERVIDOR ESTA FUNCIONANDO");
});