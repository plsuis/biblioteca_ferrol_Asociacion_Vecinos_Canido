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

    prestar(){
        throw new TypeError("non podes instanciar este método")
    }
    devolver(){
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
        /*let datosTablas = {
            campos: {
                Libro_Prestado: ['ID_Prestamos_Libro_Prestado','Prestado_Libro_Prestado','DNI_Usuario_Libro_Prestado','Codigo_Libros_Libro_Prestado'],
                Prestamos: ['FechaDesde_Prestamos','FechaHasta_Prestamos','Renovado_Prestamos','Codigo_Libros_Prestamos']
            },
            interrogacions:{
                Libro_Prestado:'?,?,?,?',
                Prestamos:'?,?,?,?'
            },
            valores:{
                Libro_Prestado:[],
                Prestamos:[req.query.fechaDesde,req.query.fechaHasta,0,req.query.codigo] //FechaDesde_Prestamos,FechaHasta_Prestamos,Codigo_Libros_Prestamos
            }
        }*/
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
        /*let datosTablas = {
            tablas:{
                Libro_Prestado:"Libro_Prestado"
            },
            campos: {
                Libro_Prestado: ['ID_Prestamos_Libro_Prestado','Prestado_Libro_Prestado','DNI_Usuario_Libro_Prestado','Codigo_Libros_Libro_Prestado'],
            },
            interrogacions:{
                Libro_Prestado:'?,?,?,?',
            },
            valores:{
                Libro_Prestado:[parseInt(req.query.id_libro_prestado)],
            }
        }*/
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
    
}

class Usuario{

    usuario;
    apelido1;
    apelido2;
    dni;
    rol = 'socio';
    campos;
    constructor(campos){
        this.campos = campos;
        this.usuario = campos.usuario;
        this.apelido1 = campos.apelido1;
        this.apelido2 = campos.apelido2;
        this.dni = campos.dni;
    }

    get datosUsuario(){
        this.campos.rol = this.rol;
        return this.campos;
    }

    set actualizoUsuario(novoscampos){
        this.campos = novoscampos;
    }
}

module.exports = {
    Libro,
    Usuario
}

