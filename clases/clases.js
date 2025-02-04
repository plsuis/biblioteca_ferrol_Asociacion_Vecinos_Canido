// ARQUIVOS DE CABECEIRA
const {
    datosTablas
} = require("../datos/varios.js") 
// Clase abstracta en javascript
class Material{
    
   constructor(){
    if(this.constructor === Material){
        throw new TypeError("non podes instanciar esta clase")
    }
   }
    async executar(){
        throw new TypeError("non podes instanciar este método")
    }

    async lista(){
        throw new TypeError("non podes instanciar este método")
    }

    async prestar(){
        throw new TypeError("non podes instanciar este método")
    }
    async devolver(){
        throw new TypeError("non podes instanciar este método")
    }
    async borrar(){
        throw new TypeError("non podes instanciar este método")
    }
}

class Libro extends Material{

    constructor(baseDatosOperacions){
        super()// fai que podamos acceder os métodos da clase pai ou superclase
        this.operacions = baseDatosOperacions;
    }
    async executar(sentenciaSql,valores,mensaxe){
        
        try{
            return await this.operacions.executar(sentenciaSql,valores,mensaxe)
        }catch(error){
            console.error(error)
        }
    }
    async lista(sentenciaSql){
        return await this.operacions.consultar(sentenciaSql)
    }
    
    async prestarLibro(req,sentenciaSql){
        let sentencia;
        /**
         * 1º Deberemos realizar a inserción na tabla "PRESTAMOS"
         * cos datos 'FechaDesde_Prestamos,FechaHasta_Prestamos,Renovado_Prestamos,Codigo_Libros_Prestamos',
         * polo que deberemos recibir os seguintes datos dende o cliente:
         * 
         *  -> FechaDesde_Prestamos,FechaHasta_Prestamos,Codigo_Libros_Prestamos
         * 
         * 2º Deberemos facer unha consulta na tabla 'PRESTAMOS' para obter os seguintes datos
         *  -> O id do préstamo para insertalo na tabla 'LIBRO PRESTADO' no campo ID_Prestamos_Libro_Prestado
         *  -> O Código do libro para insertalo na tabla 'LIBRO PRESTADO' no campo Codigo_Libros_Libro_Prestado
         * 
         * 3º Co JWT obteremos o DNI do usuario
         *  -> O DNI do usuario para insertalo na tabla 'LIBRO PRESTADO' no campo DNI_Usuario_Libro_Prestado
         * 
         * e como último paso 4º, insertar os datos na tabla 'LIBRO_PRESTADO'
         *  
         */
        
        let tablas = {
            Prestamos:'Prestamos',
            Libro_Prestado:'Libro_Prestado'
        }
        
        let recibidos;
        try{
            //1º Deberemos realizar a inserción na tabla "PRESTAMOS"
            sentencia = sentenciaSql.insertarLibroPrestado(datosTablas.tablas.Prestamos,datosTablas.campos.Prestamos,datosTablas.interrogacions.Prestamos)
            //await this.operacions.executar(sentencia,camposTablas,"insertado en Libro_Prestado")
            await this.executar(sentencia,datosTablas.valores.Prestamos(req),"insertado en PRESTAMOS")

            //2º Deberemos facer unha consulta na tabla 'PRESTAMOS' - SELECT * FROM ${dato.tabla} WHERE ${dato.campo} = ${dato.valor}
            let dato = {
                tabla: "Prestamos",
                campo: 'Codigo_Libros_Prestamos',
                valor: req.query.codigo
            }

            sentencia = sentenciaSql.selecionarTablaWhere(dato);
            
            recibidos = await this.operacions.consultar(sentencia)
            console.log("datos recibidos de selecionarTablaWhere: ",recibidos[0].ID_Prestamos,recibidos)
            
        }catch(error){
            console.error("error insertando datos en Prestamos ",error)
        }

        try{
            //3º Co JWT obteremos o DNI do usuario, polo que o incluiremos en 'req.dni'
            datosTablas.valores.Libro_Prestado.push(recibidos[0].ID_Prestamos)
            datosTablas.valores.Libro_Prestado.push(1)
            datosTablas.valores.Libro_Prestado.push(req.body.dni)
            datosTablas.valores.Libro_Prestado.push(recibidos[0].Codigo_Libros_Prestamos);
            console.log('datosTablas.valores.Libro_Prestado ',datosTablas.valores.Libro_Prestado)
            sentencia = sentenciaSql.insertarLibroPrestado(tablas.Libro_Prestado,datosTablas.campos.Libro_Prestado,datosTablas.interrogacions.Libro_Prestado)
            console.log("sentencia ",sentencia)
            //4º insertar os datos na tabla 'LIBRO_PRESTADO'
            let insertadoLibroPrestado = await this.executar(sentencia,datosTablas.valores.Libro_Prestado,"insertado en Libro_Prestado")
            console.log("insertadoLibroPrestado ",insertadoLibroPrestado)
            return insertadoLibroPrestado
            //return await this.executar(sentencia,datosTablas.valores.Libro_Prestado,"insertado en Libro_Prestado")
        }catch(error){
            console.error("error insertando datos en Libro_Prestado",error)
        }
        
        return "sentencias executadas"
    }

    async devolver(req,sentenciaSql){
        /**
         * Actualizaremos a tabla 'Libro_Prestado' o campo 'Prestado_Libro_Prestado' a 0
         * Necesito do cliente:
         * > id_libro_prestado
         * 
         */
       
        let sentencia;
        try{
            console.log("req.params.id_libro_prestado ",req.params,req.params.id_libro_prestado)
            //1º Deberemos realizar a inserción na tabla "PRESTAMOS"
            sentencia = sentenciaSql.actualizarLibroPrestado(datosTablas.tablas.Libro_Prestado,datosTablas.campos.Libro_Prestado)
            console.log("sentencia ",sentencia)
            let actualizadoLibroPrestado = await this.executar(sentencia,datosTablas.valores.Libro_Prestado_ID(req),"actualizado Libro_Prestado")
            console.log("actualizadoLibroPrestado ", actualizadoLibroPrestado)
            return actualizadoLibroPrestado
        }catch(error){
            console.error("error devolvendo libros",error)
        }



    }
    
    async borrar(req,sentenciaSql){
        /**
         * Borro da táboa Libro co codigo
         */
        let sentencia;
        try{
            console.log("req.params.codigo ",req.params,req.params.codigo)
            //1º Deberemos realizar a inserción na tabla "PRESTAMOS"
            sentencia = sentenciaSql.borrar(datosTablas.tablas.Libros,datosTablas.campos.Libros[2])
            console.log("sentencia ",sentencia)
            let borradoLibro = await this.executar(sentencia,datosTablas.valores.Libro_Borrar(req),"libro borrado da táboa Libro")
            console.log("borradoLibro ", borradoLibro)
            return borradoLibro
        }catch(error){
            console.error("error devolvendo libros",error)
        }
    }
}

class Usuario{

    usuario;
    apelido1;
    apelido2;
    dni;
    rol = 'socio';
    campos;
    constructor(campos = ''){
        this.campos = campos;
        this.usuario = campos.usuario;
        this.apelido1 = campos.apelido1;
        this.apelido2 = campos.apelido2;
        this.dni = campos.dni;
    }

    set novoDniUsuario(dni){
        this.dni = dni;
    }
    get dniUsuario(){
        return this.dni;
    }

    get datosUsuario(){
        this.campos.rol = this.rol;
        return [this.campos];
    }

    set actualizoUsuario(novoscampos){
        this.campos = novoscampos;
    }
}
class AccionsLibroBBDD{
    constructor(bbdd){
        this.bbdd = bbdd;
    }
    async actualizar(tabla,campo,valores){
        let sentencia = `UPDATE ${tabla} SET ${campo.titulo} = ? ,${campo.autor} = ? ,${campo.codigo} = ? ,${campo.editorial} = ? ,${campo.ano} = ?,${campo.xenero} = ? WHERE ${campo.codigo} = ?`;
        this.bbdd.executar(sentencia,valores,"actualizado libro")
    }

    async buscar(tabla,campo,valores){
        let sentencia = `SELECT * FROM ${tabla} WHERE ${campo.titulo} LIKE ${valores}`;
        console.log(sentencia)
        return this.bbdd.consultarValores(sentencia,valores,"libro buscado")
    }

    async prestados(tabla,campo){
        let sentencia = `SELECT * FROM ${tabla.prestamos} INNER JOIN ${tabla.libro_prestado}
        ON ${campo.codigo_libros_libro_prestado} = ${campo.codigo_libros_prestamos}
        JOIN ${tabla.usuario}
        ON ${campo.dni_usuario} = ${campo.dni_usuario_libro_prestado}
        JOIN ${tabla.libros}
        ON ${campo.codigo_libros} = ${campo.codigo_libros_libro_prestado}
        WHERE ${campo.prestado_libro_prestado} = 1
        group by ${campo.id_prestamos_libro_prestado}`;
        //let sentencia1 = `SELECT * FROM ${tabla.prestamos} INNER JOIN ${tabla.libro_prestado} ON ${campo.codigo_libros_libro_prestado} = ${campo.codigo_libros_prestamos} JOIN ${tabla.usuario} ON ${campo.codigo_libros} = ${campo.codigo_libros_libro_prestado}`
        try{
            console.log(sentencia)
            return this.bbdd.consultar(sentencia,"prestados")
        }catch(error){
            console.error(error)
            throw Error("erro de consulta");
            
        }
        
    }
}
class AccionsUsuarioBBDD{
    constructor(bbdd){
        this.bbdd = bbdd;
    }

    async borrar(tabla,campo,valores){
        let sentencia = `DELETE FROM ${tabla} WHERE ${campo} = ?`;
        this.bbdd.executar(sentencia,valores,"borrado usuario")
    }

    async actualizar(tabla,campo,valores){
        let sentencia = `UPDATE ${tabla} SET ${campo.nome} = ? ,${campo.apelido1} = ? ,${campo.apelido2} = ? ,${campo.dni} = ? ,${campo.rol} = ? WHERE ${campo.dni} = ?`;
        this.bbdd.executar(sentencia,valores,"actualizado usuario")
    }
}
module.exports = {
    Libro,
    Usuario,
    AccionsUsuarioBBDD,
    AccionsLibroBBDD
}

