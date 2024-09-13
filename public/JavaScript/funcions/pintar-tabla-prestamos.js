import { comunicacion } from "../comunicacion/comunicacion.js";
/**************PRESTAMOOOOOOOOOOOOOOS***************/
const endpoints = {
    libros: {
      prestados:"/prestados-libros",
    }
};

//----- FUNCION PARA PINTAR A TABOA DE LIBROS EDITABLE -----//
let tabla = document.querySelector(".body-tabla");

const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.libros.prestados);
    console.log(datosRecibidos.mensaxe)
    let i = 0;
    for (i = 0; i < datosRecibidos.mensaxe.length; i++) {
    let datosLibros = datosRecibidos.mensaxe[i];
    console.log("datosLibros",datosLibros)
    let fila = document.createElement("tr");
    //console.log(fila)
    tabla.append(fila);
          //let cliente = datosConvertidos[i];
   for (let propiedade in datosLibros) {
    
    let celda = document.createElement("td");
    let dato;
    console.log()
    console.log(datosLibros[propiedade])
    if(datosLibros.ID_Prestamos){
      dato = JSON.stringify(datosLibros.ID_Prestamos);
      celda.innerHTML = dato.replace(/\"/g, "");
      fila.append(celda);
    }
      /* dato = JSON.stringify(datosLibros[propiedade]); */
    
    
   };


   
    }
   
    
};

resgistroInputs();  