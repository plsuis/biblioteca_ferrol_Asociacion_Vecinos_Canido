const borrarUsuarios = require("./borrar.usuarios.js");
const insertUsuarios = require("./insert.usuarios.js");
const actualizarUsuarios = require("./actualizar.usuarios.js");
const readUsuarios = require("./read.usuarios.js");

module.exports = {
    readUsuarios,
    insertUsuarios,
    borrarUsuarios,
    actualizarUsuarios
}