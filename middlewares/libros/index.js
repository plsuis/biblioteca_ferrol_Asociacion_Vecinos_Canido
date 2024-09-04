const insertLibros = require("./insert.libros.js");
const prestarLibros = require("./prestar.libros.js");
const readLibros = require("./read.libros.js");

module.exports = {
    readLibros,
    insertLibros,
    prestarLibros
}