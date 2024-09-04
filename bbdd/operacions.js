const { baseDatosASV} = require('./datos.bbdd.js');

class BBDD{
    constructor(bbdd){
        this.db = bbdd;
    }
    creoBaseDatos(){
        return new Promise((resolve, reject) => {
            this.db.exec(baseDatosASV,(err) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve("Tablas creadas con éxito.");
                }
            })
            
        })
        
    }

    // AGREGO O MÉTODO
    executar(sentenciaSql,valores,mensaxe){
        return new Promise((resolve,reject)=>{
            console.log('operacions bbdd2',sentenciaSql,valores,mensaxe)
            this.db.run(sentenciaSql,valores,
                function (err) {
                   // (err) ? reject(err) : resolve(`inserta en base2 ${this.lastID}`); 
                   (err) ? reject(err) : resolve(mensaxe); 

                })
        })
    }
    consultar(sqlConsulta) {
        return new Promise((resolve, reject) => {
            this.db.all(sqlConsulta, [], (error, rows) => {
                if (error) {
                    reject("Error al consultar: " + error.message);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    get baseDeDatos(){
        return this.db;
    }
    set novaBaseDeDatos(bbdd){
        this.db = bbdd;
    }
}

class OperacionsBBDD extends BBDD{
    constructor(bbdd){
        super(bbdd);//obligatorio para poder acceder a clase pai
    }

    
    insertar(sentenciaSql,valores){
        return new Promise((resolve,reject)=>{
            this.db.run(sentenciaSql,valores,
                function (err) {
                    (err) ? reject(err) : resolve(`inserta en base2 ${this.lastID}`); 
                })
        })
    }
    consultar(sqlConsulta) {
        return new Promise((resolve, reject) => {
            this.db.all(sqlConsulta, [], (error, rows) => {
                if (error) {
                    reject("Error al consultar: " + error.message);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}
class OperacionsBBDD2{
   constructor(bbdd){
    this.db = bbdd;
   }
    
    executar(sentenciaSql,valores,mensaxe){
        return new Promise((resolve,reject)=>{
            console.log('operacions bbdd2',sentenciaSql,valores,mensaxe)
            this.db.run(sentenciaSql,valores,
                function (err) {
                   // (err) ? reject(err) : resolve(`inserta en base2 ${this.lastID}`); 
                   (err) ? reject(err) : resolve(mensaxe); 

                })
        })
    }
    
    consultar(sqlConsulta) {
        return new Promise((resolve, reject) => {
            this.db.all(sqlConsulta, [], (error, rows) => {
                if (error) {
                    reject("Error al consultar: " + error.message);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}
module.exports = {
    BBDD,
    OperacionsBBDD,
    OperacionsBBDD2
}