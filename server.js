// ARQUIVOS DE CABECEIRA
const express = require("express");
const path = require("path");
const cors = require("cors");

const { paxinaInicio, paxinaBiblioteca, paxinaPrestamos, paxinaNovoLibro, paxinaNovoPrestamo } = require("./middlewares/funcions.views");
const { endpoints } = require("./datos/varios.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname,"public")))
// MIDDLEWARES

// END-POINTS


//app.get("/", paxinaInicio); // index.html
app.get(endpoints.xestion.biblioteca, paxinaBiblioteca); // biblioteca.html
app.get(endpoints.xestion.prestamos, paxinaPrestamos); // prestamos.html
app.get(endpoints.paxina.formularioLibro, paxinaNovoLibro); // novo-libro.html
app.get(endpoints.paxina.formularioPrestamo, paxinaNovoPrestamo)//novo-prestamo.html
// GETTERS

// PUTS

// DELETES


// LISTEN SERVER
app.listen(3000, function () {
    console.log("O SERVIDOR ESTA FUNCIONANDO");
});