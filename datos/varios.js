const endpoints = {
    xestion: {
        bibliotecaAdmin: "/xestion-biblioteca",
        prestamos:"/xestion-prestamos"
    },
    paxinas: {
        logueo:"/iniciar-sesion",
        bibliotecaSenUsuario:"/nosos-libros",
        inicioAdmin:"/administracion",
        formularioLibro:"/formulario-libro",
        formularioPrestamo:"/formulario-prestamo"
    },
    libros:{
        insertar:"/insertar-libro",
        prestar:"/prestar-libro",
        borrar:"/borro-libro/:ano",
        leotodos:"/leo-libros"
    }
}

module.exports = {
    endpoints
}