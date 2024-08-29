// ARQUIVOS DE CABECEIRA
const express = require("express");
const path = require("path");
const cors = require("cors");

const { paxinaInicio, paxinaBiblioteca, paxinaPrestamos, paxinaNovoLibro } = require("./middlewares/funcions.views");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// MIDDLEWARES

// END-POINTS
app.use(express.static(path.join(__dirname, "public")));

app.get("/", paxinaInicio); // index.html
app.get("xestion-biblioteca", paxinaBiblioteca); // biblioteca.html
app.get("xestion-prestamos", paxinaPrestamos); // prestamos.html
app.get("engadir-novo-libro", paxinaNovoLibro); // novo-libro.html
// GETTERS

// PUTS

// DELETES


// LISTEN SERVER
app.listen(3000, function () {
    console.log("O SERVIDOR ESTA FUNCIONANDO");
});