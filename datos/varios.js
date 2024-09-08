const endpoints = {
    xestion: {
        bibliotecaAdmin: "/xestion-biblioteca",
        usuarios:"/xestion-usuarios",
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
        borrar:"/borro-libro/",
        leotodos:"/leo-libros",
        devolver:"/devolver-libros/",
        actualizar:"/actualizar-libros/",
        buscar:"/buscar-libros/"
    },
    usuario:{
        insertar:"/insertar-usuarios",
        actualizar:"/actualizar-usuarios",
        borrar:"/borro-usuario/",
        leotodos:"/leo-usuarios",
    }
}
let datosTablas = {
    tablas:{
        Usuario:'Usuario',
        Prestamos:'Prestamos',
        Libro_Prestado:"Libro_Prestado",
        Libros:'Libros'
    },
    campos: {
        Usuario:['Nome_Usuario','Apelido_1_Usuario','Apelido_2_Usuario','DNI_Usuario','ROL_Usuario'],
        Libros:['Titulo_Libros','Autor_Libros','Codigo_Libros','Editorial_Libros','Anho_edicion_Libros','Xenero_Libros'],
        Libro_Prestado: ['ID_Prestamos_Libro_Prestado','Prestado_Libro_Prestado','DNI_Usuario_Libro_Prestado','Codigo_Libros_Libro_Prestado'],
        Prestamos: ['FechaDesde_Prestamos','FechaHasta_Prestamos','Renovado_Prestamos','Codigo_Libros_Prestamos']
    },
    interrogacions:{
        Libro_Prestado:'?,?,?,?',
        Prestamos:'?,?,?,?'
    },
    valores:{
        Libro_Prestado:[],
        Libro_Prestado_ID: function(req){
            return [parseInt(req.query.id_libro_prestado)]
        },
        Libro_Borrar:function(req){
            return [req.query.codigo]
        },
        Prestamos:function (req){
            return [req.query.fechaDesde,req.query.fechaHasta,0,req.query.codigo] //FechaDesde_Prestamos,FechaHasta_Prestamos,Codigo_Libros_Prestamos
            }
    }
}
module.exports = {
    endpoints,
    datosTablas
}