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
        prestar:"/prestar-libro/",
        borrar:"/borro-libro/:ano",
        leotodos:"/leo-libros",
        devolver:"/devolver-libros/"
    },
    usuario:{
        insertar:"/insertar-usuarios",
        actualizar:"/actualizar-usuarios",
        borrar:"/borro-usuario/:id",
        leotodos:"/leo-usuarios",
    }
}
let datosTablas = {
    campos: {
        Libro_Prestado: 'ID_Prestamos_Libro_Prestado,Prestado_Libro_Prestado,DNI_Usuario_Libro_Prestado,Codigo_Libros_Libro_Prestado',
        Prestamos: 'FechaDesde_Prestamos,FechaHasta_Prestamos,Renovado_Prestamos,Codigo_Libros_Prestamos'
    },
    interrogacions:{
        Libro_Prestado:'?,?,?,?',
        Prestamos:'?,?,?,?'
    }
}
module.exports = {
    endpoints,
    datosTablas
}