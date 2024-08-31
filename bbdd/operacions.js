const { tablaLibros, baseDatosASV} = require('./datos.bbdd.js');
const sqlite3 = require('sqlite3').verbose();
const { isErro } = require('./helpers.bbdd.js');

class BBDD{
    constructor(bbdd){
        this.db = bbdd;
    }
    creoBaseDatos2(){
        return new Promise((resolve, reject) => {
            this.db.exec(tablaLibros,(err)=> {
            if(err){
                reject(err.message);
            } else {
                resolve("Tabla1 creadas con éxito.");
            }
        })
            
        })
        
    }
    creoBaseDatos(){
        return new Promise((resolve, reject) => {
            this.db.exec(baseDatosASV),
            (err) => {
                if (err) {
                    reject(err.message);
                } else {
                    resolve("Tablas creadas con éxito.");
                }
            }
        })
        
    }

    get baseDeDatos(){
        return this.db;
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
module.exports = {
    BBDD,
    OperacionsBBDD,
    OperacionsBBDD2
}