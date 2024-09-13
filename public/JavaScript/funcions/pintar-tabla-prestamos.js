import { comunicacion } from "../comunicacion/comunicacion.js";
/**************PRESTAMOOOOOOOOOOOOOOS***************/
const endpoints = {
    libros: {
      prestados:"/prestados-libros",
    }
};

//----- FUNCION PARA PINTAR A TABOA DE LIBROS EDITABLE -----//
let tabla = document.querySelector(".body-tabla");



//function celdasTabla(){}


const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.libros.prestados);
    console.log(datosRecibidos.mensaxe)
    let i = 0;
    for (i = 0; i < datosRecibidos.mensaxe.length; i++) {
    let datosLibros = datosRecibidos.mensaxe[i];
    //console.log("datosLibros",datosLibros)
    let fila = document.createElement("tr");
    //console.log(fila)
    tabla.append(fila);
          //let cliente = datosConvertidos[i];
          //celdasTabla();
   /* for (let propiedade in datosLibros) {
    
   let celda = document.createElement("td");
    let dato;
    console.log()
    console.log(datosLibros[propiedade])
    
      dato = JSON.stringify(datosLibros[propiedade]);
      celda.innerHTML = dato.replace(/\"/g, "");
      fila.append(celda);
    } 
      //dato = JSON.stringify(datosLibros[propiedade]);
       
    } */
      
    let celda1 = document.createElement("td");
    let dato1 = JSON.stringify(datosLibros.ID_Prestamos_Libro_Prestado);
    celda1.innerHTML = dato1.replace(/\"/g, "");
    fila.append(celda1);
      
    let celda2 = document.createElement("td");
    let dato2 = JSON.stringify(datosLibros.Titulo_Libros);
    celda2.innerHTML = dato2.replace(/\"/g, "");
    fila.append(celda2);
      
    let celda3 = document.createElement("td");
    let dato3 = JSON.stringify(datosLibros.Autor_Libros);
    celda3.innerHTML = dato3.replace(/\"/g, "");
    fila.append(celda3);
      
    let celda4 = document.createElement("td");
    let dato4 = JSON.stringify(datosLibros.Apelido_1_Usuario + " " + datosLibros.Apelido_2_Usuario);
    celda4.innerHTML = dato4.replace(/\"/g, "");
    fila.append(celda4);
      
    let celda5 = document.createElement("td");
    let dato5 = JSON.stringify(datosLibros.Nome_Usuario);
    celda5.innerHTML = dato5.replace(/\"/g, "");
    fila.append(celda5);
      
    let celda6 = document.createElement("td");
    let dato6 = JSON.stringify(datosLibros.FechaDesde_Prestamos);
    celda6.innerHTML = dato6.replace(/\"/g, "");
    fila.append(celda6);
      
    let celda7 = document.createElement("td");
    let dato7 = JSON.stringify(datosLibros.FechaHasta_Prestamos);
    celda7.innerHTML = dato7.replace(/\"/g, "");
    fila.append(celda7);
    



  let iconosTD = document.createElement("td");

  let devolver = document.createElement("p");
  devolver.innerText = "DEVOLVER"
   
  devolver.setAttribute("class", "devolver");

  fila.append(iconosTD);
  iconosTD.append(devolver);
};
};
resgistroInputs();  





      