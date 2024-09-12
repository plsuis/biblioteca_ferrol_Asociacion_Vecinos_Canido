import { comunicacion } from "../comunicacion/comunicacion.js";

const endpoints = {
    libros: {
        leotodos:"/leo-libros"
    }
};

let tabla = document.querySelector(".body-tabla");



//----- FUNCION PARA PINTAR A TABOA NON EDITABLE -----//
const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.libros.leotodos);
    let i = 0;
    for (i = 0; i < datosRecibidos.lista.length; i++) {
        
    let datosLibros = datosRecibidos.lista[i];
    //console.log("datosLibros",datosLibros)
    let fila = document.createElement("tr");
    //console.log(fila)
    tabla.append(fila);
   for (let propiedade in datosLibros) {
    if(datosLibros.Prestado_Libro_Prestado == 1){
        datosLibros.Prestado_Libro_Prestado = "Prestado"
      }else if(datosLibros.Prestado_Libro_Prestado == "0") {
        datosLibros.Prestado_Libro_Prestado = ""
    }
    let celda = document.createElement("td");
    let dato = JSON.stringify(datosLibros[propiedade]);
    celda.innerHTML = dato.replace(/\"/g, "");
    fila.append(celda);
   };
    }
};

resgistroInputs();  