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
}

class Libro extends Material{

    constructor(baseDatosOperacions){
        super()// fai que podamos acceder os métodos da clase pai ou superclase
        this.operacions = baseDatosOperacions;
    }
    async executar(sentenciaSql,valores,mensaxe){
        console.log(sentenciaSql,valores,mensaxe)
        return await this.operacions.executar(sentenciaSql,valores,mensaxe)
    }
    async lista(sentenciaSql){
        return await this.operacions.consultar(sentenciaSql)
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

