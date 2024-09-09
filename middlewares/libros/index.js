const actualizarLibros = require("./actualizar.libros.js");
const borrarLibros = require("./borrar.libros.js");
const buscarLibros = require("./buscar.libros.js");
const devolverLibros = require("./devolver.libros.js");
const insertLibros = require("./insert.libros.js");
const prestarLibros = require("./prestar.libros.js");
const readLibros = require("./read.libros.js");

module.exports = {
    readLibros,
    insertLibros,
    prestarLibros,
    devolverLibros,
    borrarLibros,
    actualizarLibros,
    buscarLibros
}