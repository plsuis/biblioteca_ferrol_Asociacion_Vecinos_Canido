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
        return await this.operacions.executar(sentenciaSql,valores,mensaxe)
    }
    async lista(sentenciaSql){
        return await this.operacions.consultar(sentenciaSql)
    }
    
}

class Usuario{

    constructor(campos,bbdd){
        this.bbdd = bbdd
    }
}

module.exports = {
    Libro
}

