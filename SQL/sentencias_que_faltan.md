# Creacion de selección de libros prestados co usuario

> A seguinte SENTENCIA devolve os libros e usuarios que teñen o libro : 
```sql
SELECT * from Prestamos INNER join Libro_Prestado 
on Codigo_Libros_Libro_Prestado = Codigo_Libros_Prestamos 
join Usuario 
on DNI_Usuario = DNI_Usuario_Libro_Prestado
join Libros
on Codigo_Libros =  Codigo_Libros_Libro_Prestado
group by ID_Prestamos_Libro_Prestado
```