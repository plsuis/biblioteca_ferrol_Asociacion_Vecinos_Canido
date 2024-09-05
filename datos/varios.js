const endpoints = {
    xestion: {
        bibliotecaAdmin: "/xestion-biblioteca",
        prestamos:"/xestion-prestamos",
        usuarios:"/xestion-usuarios"
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
    },
    usuario:{
        insertar:"/insertar-usuarios",
        actualizar:"/actualizar-usuarios",
        borrar:"/borro-usuario/:id",
        leotodos:"/leo-usuarios",
    }
}

module.exports = {
    endpoints
}