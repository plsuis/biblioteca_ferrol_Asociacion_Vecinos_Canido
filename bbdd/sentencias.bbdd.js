let sentenciaSql = `INSERT INTO Libros (Titulo_Libros, Autor_Libros, Codigo_Libros, Editorial_Libros, Anho_edicion_Libros) VALUES (?,?,?,?,?)`;
const valores = ['Cien Años de Soledad', 'Gabriel García Márquez', 'LIB015', 'Sudamericana', '1967']


module.exports = {
    sentenciaSql,
    valores
}