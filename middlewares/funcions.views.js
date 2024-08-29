const path = require("path");

const paxinaInicio = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./index.html", optionsRuta);
};
const paxinaBiblioteca = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/biblioteca.html", optionsRuta);
};
const paxinaPrestamos = (req, res) => {
    const optionsRuta = {
        root: path.join(__dirname, "../public"),
    };
    res.sendFile("./views/prestamos.html", optionsRuta);
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
    paxinaBiblioteca,
    paxinaPrestamos,
    paxinaNovoLibro,
    paxinaNovoPrestamo
}