let sentenciaSql ={
    insertar : function (tabla,campos,interrogacions){
        console.log( `INSERT INTO ${tabla} (${campos[0]},${campos[1]},${campos[2]},${campos[3]},${campos[4]},${campos[5]}) VALUES (${interrogacions})`)
        return `INSERT INTO ${tabla} (${campos[0]},${campos[1]},${campos[2]},${campos[3]},${campos[4]},${campos[5]}) VALUES (${interrogacions})`;
    },
    insertarUsuario : function (tabla,campos,interrogacions){
        console.log( `INSERT INTO ${tabla} (${campos[0]},${campos[1]},${campos[2]},${campos[3]},${campos[4]}) VALUES (${interrogacions})`)
        return `INSERT INTO ${tabla} (${campos[0]},${campos[1]},${campos[2]},${campos[3]},${campos[4]}) VALUES (${interrogacions})`;
    },
    insertarLibroPrestado : function (tabla,campos,interrogacions){
        console.log( `INSERT INTO ${tabla} (${campos[0]},${campos[1]},${campos[2]},${campos[3]}) VALUES (${interrogacions})`)
        return `INSERT INTO ${tabla} (${campos[0]},${campos[1]},${campos[2]},${campos[3]}) VALUES (${interrogacions})`;
    },
    selecionarTabla : function (tabla){
        return `SELECT * FROM ${tabla}`;
    },
    selecionarTablasJoinLeft: function (tabla1,tabla2,campos,condicion){
        return `SELECT ${campos} FROM ${tabla1} LEFT JOIN ${tabla2} on ${condicion}`;
    },
    selecionarTablaWhere: function(dato){
        return `SELECT * FROM ${dato.tabla} WHERE ${dato.campo} = '${dato.valor}'`;
    },
    borrar : function (tabla,campo){
        return `DELETE FROM ${tabla} WHERE ${campo} = ?`;
    },
    actualizarLibroPrestado: function(tabla,campos){
        return `UPDATE ${tabla} SET ${campos[1]} = 0 WHERE ${campos[0]} = ?`
    }

} 
const valores = ['Cien Años de Soledad', 'Gabriel García Márquez', 'LIB016', 'Sudamericana', '1967']
const consultaSql = `SELECT * FROM Libros `;

module.exports = {
    sentenciaSql,
    consultaSql,
    valores
}