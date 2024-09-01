let sentenciaSql ={
    insertar : function (tabla,campos,interrogacions){
        return `INSERT INTO ${tabla} (${campos}) VALUES (${interrogacions})`;
    },
    selecionarTODO : function (tabla){
        return `SELECT * FROM ${tabla}`;
    },
    borrar : function (dato){
        return `DELETE FROM ${dato.tabla} WHERE ${dato.campo} = ${dato.valor}`;
    }
} 
const valores = ['Cien Años de Soledad', 'Gabriel García Márquez', 'LIB016', 'Sudamericana', '1967']
const consultaSql = `SELECT * FROM Libros `;

module.exports = {
    sentenciaSql,
    consultaSql,
    valores
}