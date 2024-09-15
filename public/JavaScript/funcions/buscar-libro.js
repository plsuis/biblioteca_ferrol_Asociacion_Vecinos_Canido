import { comunicacionBuscar } from "../comunicacion/comunicacion.js";

const endpoints = {
    libros: {
      leotodos:"/leo-libros",
      buscar:"/buscar-libros/",
    }
};

let inputBarraBusqueda = document.querySelector("#barra-busqueda");
let botonBuscar = document.querySelector("#boton-busqueda");
let tabla = document.querySelector(".resultados-busqueda");
let botonBorrarBuscar = document.querySelector("#boton-borrar-busqueda");

//----- FUNCION PARA BUSCAR UN LIBRO CONCRETO -----//
inputBarraBusqueda.addEventListener("input", async() =>{
  //tabla.childrenNodes.remove()
  let valorInput = inputBarraBusqueda.value;
  
  let textoTitulo = valorInput.trim().toLowerCase();
  console.log("Valor Input-->", textoTitulo);
  
  let datoRecibido = await comunicacionBuscar(`buscar-libros/?textoTitulo=${textoTitulo}`);
  //console.log("inputBarraBusqueda.addEventListener datoRecibido.mensaxe ",datoRecibido.mensaxe)
  let i = 0;
  let datosLibros = datoRecibido.mensaxe;
  //console.log(datosLibros)
  if(datosLibros !== undefined){
  

      let fila = document.createElement("tr");
      tabla.append(fila);

      let tdTitulo = document.createElement("th");
      tdTitulo.innerText = "Título";
      fila.append(tdTitulo);
      let tdAutor = document.createElement("th");
      tdAutor.innerText = "Autor";
      fila.append(tdAutor);
      let tdIsbn = document.createElement("th");
      tdIsbn.innerText = "ISBN";
      fila.append(tdIsbn);
      let tdEditorial = document.createElement("th");
      tdEditorial.innerText = "Editorial";
      fila.append(tdEditorial);
      let tdAno = document.createElement("th");
      tdAno.innerText = "Ano de Edición";
      fila.append(tdAno);
      let tdXenero = document.createElement("th");
      tdXenero.innerText = "Xénero";
      fila.append(tdXenero);

 
  console.log("datoRecibido.mensaxe antes",datoRecibido.mensaxe)
 
      for (let i = 0; i < datoRecibido.mensaxe.length; i++) {
      
        let fila = document.createElement("tr");
        
        for (let propiedade in datosLibros[i]) {
          console.log(" let propiedade in datosLibros ",propiedade)
          let celda = document.createElement("td");
          let dato = JSON.stringify(datosLibros[i][propiedade]);
          console.log("dato ",dato);
          celda.innerHTML = dato.replace(/\"/g, "");
          console.log("celda? ",celda)
          fila.append(celda);  
        }
        console.log("fila ",fila)
        tabla.append(fila);
      }
    
  }
})
botonBuscar.addEventListener("click", async() =>{

  let valorInput = inputBarraBusqueda.value;
  
  let textoTitulo = valorInput.trim().toLowerCase();
  console.log("Valor Input-->", textoTitulo);
  
  let datoRecibido = await comunicacionBuscar(`buscar-libros/?textoTitulo=${textoTitulo}`);
  console.log('botonBuscar.addEventListener ',datoRecibido.mensaxe)
  let i = 0;
  let datosLibros = datoRecibido.mensaxe[i];
  console.log(datosLibros)
  if(datosLibros !== undefined){
    let fila = document.createElement("tr");
    tabla.append(fila);

    let tdTitulo = document.createElement("th");
    tdTitulo.innerText = "Título";
    fila.append(tdTitulo);
    let tdAutor = document.createElement("th");
    tdAutor.innerText = "Autor";
    fila.append(tdAutor);
    let tdIsbn = document.createElement("th");
    tdIsbn.innerText = "ISBN";
    fila.append(tdIsbn);
    let tdEditorial = document.createElement("th");
    tdEditorial.innerText = "Editorial";
    fila.append(tdEditorial);
    let tdAno = document.createElement("th");
    tdAno.innerText = "Ano de Edición";
    fila.append(tdAno);
    let tdXenero = document.createElement("th");
    tdXenero.innerText = "Xénero";
    fila.append(tdXenero);

 
  //console.log(datoRecibido.mensaxe.length)
 
    for (i = 0; i < datoRecibido.mensaxe.length; i++) {
    
      let fila = document.createElement("tr");
      tabla.append(fila);
      for (let propiedade in datosLibros) {
    
        let celda = document.createElement("td");
        let dato = JSON.stringify(datosLibros[propiedade]);
        //console.log(datosLibros.Prestado_Libro_Prestado);
        celda.innerHTML = dato.replace(/\"/g, "");
        fila.append(celda); 
      }
    }
    
  }
})

botonBorrarBuscar.addEventListener("click", async() =>{
  tabla.innerHTML = "";
})