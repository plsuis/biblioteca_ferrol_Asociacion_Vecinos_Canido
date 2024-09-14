const { AccionsLibroBBDD } = require("../../clases/clases.js");
const { datosTablas } = require("../../datos/varios.js");
const { refBBDD } = require("../helpers.middlewares.js")

const prestadosLibros = async (req,res) => {

    try{
        
        const accion = new AccionsLibroBBDD(refBBDD);

        let tabla = {
            prestamos: `'${datosTablas.tablas.Prestamos}'`,
            usuario: `'${datosTablas.tablas.Usuario}'`,
            libro_prestado:`'${datosTablas.tablas.Libro_Prestado}'`,
            libros:`'${datosTablas.tablas.Libros}'`
        }
        let campo = {
            codigo_libros_libro_prestado: `${datosTablas.campos.Libro_Prestado[3]}`,
            codigo_libros_prestamos: `${datosTablas.campos.Prestamos[3]}`,
            codigo_libros: `${datosTablas.campos.Libros[2]}`,
            id_prestamos_libro_prestado : `${datosTablas.campos.Libro_Prestado[0]}`,
            dni_usuario:`${datosTablas.campos.Usuario[3]}`,
            dni_usuario_libro_prestado:`${datosTablas.campos.Libro_Prestado[2]}`,
            prestado_libro_prestado: `${datosTablas.campos.Libro_Prestado[1]}`
        }
        
        let librosPrestados = await accion.prestados(tabla,campo)
        console.log(librosPrestados)
        res.send({
            mensaxe: librosPrestados
        })
    }catch(error){
        console.error("erro en middleware prestadoLibros")
    }
}

module.exports = {
    prestadosLibros
}