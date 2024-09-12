const path = require("path");
const { paxinasObxecto } = require("../arquivosEncriptados/encriptacion-paxinas.js");

const paxinaInicio = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./index.html", optionsRuta);
};

const paxinaBibliotecaSenUsuario = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/biblioteca.html", optionsRuta);
};

const paxinaLogueoAdmin = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/login-admin.html", optionsRuta);
};

const paxinaInicioAdmin = (req, res) => {
     const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/inicio-admin.html", optionsRuta);
    
};

const paxinaNovoUsuario = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/crear-usuario.html", optionsRuta);
};

const paxinaBiblioteca = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/biblioteca-admin.html", optionsRuta);
};
const paxinaPrestamos = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/prestamos-admin.html", optionsRuta);
};
const paxinaNovoLibro = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/novo-libro.html", optionsRuta);
};
const paxinaNovoPrestamo = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/novo-prestamo.html", optionsRuta);
};

module.exports = {
    paxinaInicio,
    paxinaBibliotecaSenUsuario,
    paxinaLogueoAdmin,
    paxinaInicioAdmin,
    paxinaBiblioteca,
    paxinaPrestamos,
    paxinaNovoUsuario,
    paxinaNovoLibro,
    paxinaNovoPrestamo
}