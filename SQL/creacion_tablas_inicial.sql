CREATE TABLE IF NOT EXISTS Libros
                (
    
                Titulo_Libros						 TEXT NOT NULL,
                Autor_Libros						 TEXT NOT NULL,
                Codigo_Libros						 TEXT NOT NULL,
                Editorial_Libros					 TEXT NOT NULL,
                Anho_edicion_Libros				 TEXT NOT NULL,
                
                PRIMARY KEY (Codigo_Libros)
                );
    
                CREATE TABLE IF NOT EXISTS Prestamos
                (
                ID_Prestamos						 INTEGER PRIMARY KEY AUTOINCREMENT,
                FechaDesde_Prestamos				 CHAR(100) NOT NULL,
                FechaHasta_Prestamos				 CHAR(100) NOT NULL,
                Renovado_Prestamos				 INT NOT NULL,
                Codigo_Libros_Prestamos			 TEXT NOT NULL,
                
                FOREIGN KEY (Codigo_Libros_Prestamos) REFERENCES Libros(Codigo_Libros) ON UPDATE CASCADE ON DELETE CASCADE
                );
    
                CREATE TABLE IF NOT EXISTS Usuario
                (
                Nome_Usuario						 CHAR(100) NOT NULL,
                Apelido_1_Usuario					 CHAR(100) NOT NULL,
                Apelido_2_Usuario					 CHAR(100) NOT NULL,
                DNI_Usuario						 CHAR(10) NOT NULL,
                ROL_Usuario						 CHAR(50),
                
                PRIMARY KEY (DNI_Usuario),
    
                CHECK (ROL_Usuario IN ('admin','socio','administrativo')) 
                );
    
                CREATE TABLE IF NOT EXISTS Libro_Prestado
                (
                ID__Libro_Prestado			 INTEGER PRIMARY KEY AUTOINCREMENT,
                ID_Prestamos_Libro_Prestado	 INT NOT NULL,
                Prestado_Libro_Prestado		 INTEGER NOT NULL,
                DNI_Usuario_Libro_Prestado	 CHAR(10) NOT NULL,
                Codigo_Libros_Libro_Prestado	 TEXT NOT NULL,
                
                
                FOREIGN KEY (DNI_Usuario_Libro_Prestado) REFERENCES Usuario(DNI_Usuario) ON UPDATE CASCADE ON DELETE CASCADE,
                FOREIGN KEY (Codigo_Libros_Libro_Prestado) REFERENCES Libros(Codigo_Libros) ON UPDATE CASCADE ON DELETE CASCADE,
                FOREIGN KEY (ID_Prestamos_Libro_Prestado) REFERENCES Prestamos(ID_Prestamos) ON UPDATE CASCADE ON DELETE CASCADE
                );
    
                CREATE TABLE IF NOT EXISTS Multas
                (
                ID_Multas						 INTEGER PRIMARY KEY AUTOINCREMENT,
                Dias_Multas					 INT NOT NULL,
                DNI_Usuario_Multas			 CHAR(10) NOT NULL,
                
                FOREIGN KEY (DNI_Usuario_Multas) REFERENCES Usuario(DNI_Usuario) ON UPDATE CASCADE ON DELETE CASCADE
                );