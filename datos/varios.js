const endpoints = {
    xestion: {
        bibliotecaAdmin: "/xestion-biblioteca",
        prestamos:"/xestion-prestamos"
    },
    paxinas: {
        logueo:"/iniciar-sesion",
        bibliotecaSenUsuario:"/nosos-libros",
        inicioAdmin:"/administracion"
    },
    formularios:{
        formularioLibro: "/engadir-novo-libro",
        formularioPrestamo: "/facer-novo-prestamo"
    }
}

module.exports = {
    endpoints
}