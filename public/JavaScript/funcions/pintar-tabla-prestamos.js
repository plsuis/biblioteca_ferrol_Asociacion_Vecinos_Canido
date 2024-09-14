import { comunicacion } from "../comunicacion/comunicacion.js";
/**************PRESTAMOOOOOOOOOOOOOOS***************/
const endpoints = {
    libros: {
      prestados:"/prestados-libros",
    }
};

//----- FUNCION PARA PINTAR A TABOA DE LIBROS EDITABLE -----//
let tabla = document.querySelector(".body-tabla");
const columnaTabla = (propiedade,datosLibros) => {
  let dato;
    console.log('propiedade ',propiedade)
    
    //console.log(datosLibros[propiedade])
     if(propiedade == 'ID_Prestamos'){
       console.log('propiedade dato',propiedade,dato)
       dato = JSON.stringify(datosLibros.ID_Prestamos);
       return dato.replace(/\"/g, "");
    }
    if(propiedade == 'Titulo_Libros'){
      console.log('propiedade dato',propiedade,dato)
      dato = JSON.stringify(datosLibros.Titulo_Libros);
      return dato.replace(/\"/g, "");
    }
    if(propiedade == 'Autor_Libros'){
      console.log('propiedade dato',propiedade,dato)
      dato = JSON.stringify(datosLibros.Autor_Libros);
      return dato.replace(/\"/g, "");
    }
    if(propiedade == 'Apelido_1_Usuario'){
      console.log('propiedade dato',propiedade,dato)
      dato = JSON.stringify(datosLibros.Apelido_1_Usuario);
      return dato.replace(/\"/g, "");
    }
    if(propiedade == 'Nome_Usuario'){
      console.log('propiedade dato',propiedade,dato)
      dato = JSON.stringify(datosLibros.Nome_Usuario);
      return dato.replace(/\"/g, "");
    }
    if(propiedade == 'FechaDesde_Prestamos'){
      console.log('propiedade dato',propiedade,dato)
      dato = JSON.stringify(datosLibros.FechaDesde_Prestamos);
      return dato.replace(/\"/g, "");
    }
    if(propiedade == 'FechaHasta_Prestamos'){
      console.log('propiedade dato',propiedade,dato)
      dato = JSON.stringify(datosLibros.FechaHasta_Prestamos);
      return dato.replace(/\"/g, "");
    } 
}
const cambiarOrdenPrestamos = (prestamo)=>{
  let novoOrden = {
    ID_Prestamos: prestamo.ID_Prestamos,
    Titulo_Libros:prestamo.Titulo_Libros,
    Autor_Libros: prestamo.Autor_Libros,
    Apelido_1_Usuario: prestamo.Apelido_1_Usuario,
    Nome_Usuario: prestamo.Nome_Usuario,
    FechaDesde_Prestamos: prestamo.FechaDesde_Prestamos,
    FechaHasta_Prestamos: prestamo.FechaHasta_Prestamos
  };
  return novoOrden
  
}
const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.libros.prestados);
    console.log(datosRecibidos.mensaxe)
    let i = 0;
    for (i = 0; i < datosRecibidos.mensaxe.length; i++) {
    let datosLibros = datosRecibidos.mensaxe[i];
    datosLibros = cambiarOrdenPrestamos(datosLibros)
    let fila = document.createElement("tr");
    tabla.append(fila);
    
   for (let propiedade in datosLibros) {
    
    let celda = document.createElement("td");
    celda.innerHTML = columnaTabla(propiedade,datosLibros)
    if(celda.textContent != 'undefined'){
      fila.append(celda);
    }
    
    console.log("fila ",fila)
      /* dato = JSON.stringify(datosLibros[propiedade]); */
    



  let iconosTD = document.createElement("td");

  let devolver = document.createElement("p");
  devolver.innerText = "DEVOLVER"
   
  devolver.setAttribute("class", "devolver");

  fila.append(iconosTD);
  iconosTD.append(devolver);
};
};
}
resgistroInputs();  





      