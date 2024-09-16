import { comunicacionBuscar } from "../comunicacion/comunicacion.js";

const endpoints = {
    libros: {
      leotodos:"/leo-libros",
      buscar:"/buscar-libros/",
    }
};

let inputBarraBusqueda = document.querySelector("#barra-busqueda");
let botonBuscar = document.querySelector("#boton-busqueda");
//let tabla = document.querySelector(".resultados-busqueda");
let botonBorrarBuscar = document.querySelector("#boton-borrar-busqueda");
let numLibros = []
const borrandoTabla = (textoTitulo,datoRecibido)=>{
  let tabla = document.querySelector(".resultados-busqueda");
  
  console.log("inicio ",numLibros,datoRecibido.mensaxe.length)
  console.log("datoRecibido.mensaxe ",datoRecibido.mensaxe)
  console.log("num filas tabla.childElementCount ",tabla.childElementCount)
  let cantidadBorrar = tabla.childElementCount - datoRecibido.mensaxe.length - 1;
  console.log("cantidadBorrar ",cantidadBorrar,tabla.childElementCount)
  if(textoTitulo.length > 1){
    for(let i = 0; i < cantidadBorrar ; i++){
      console.log("borrando i",i,"cantidadBorrar ",cantidadBorrar)
      console.log("tabla.childNodes[i] ",tabla.childNodes[i])
      //tabla.childNodes[i].remove()
    }
  }
  
}
const pintarTabla = (datoRecibido,textoTitulo)=>{
  let tabla = document.querySelector(".resultados-busqueda");
  let datosLibros = datoRecibido.mensaxe;
  console.log("datosLibros EN PINTAR TABLA ???",datosLibros)
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
  if(datosLibros !== undefined){
    
  //console.log("datoRecibido.mensaxe antes",datoRecibido.mensaxe)
     
      for (let i = 0; i < datoRecibido.mensaxe.length; i++) {
      
        let fila = document.createElement("tr");
        
        for (let propiedade in datosLibros[i]) {
          console.log("pintando i ",i)
          let celda = document.createElement("td");
          let dato = JSON.stringify(datosLibros[i][propiedade]);
          //console.log("dato ",dato);
          celda.innerHTML = dato.replace(/\"/g, "");
          //console.log("celda? ",celda)
          fila.append(celda);  
        }
        //console.log("fila ",fila)
        tabla.append(fila);
      }

      borrandoTabla(textoTitulo,datoRecibido)
  }
  
  numLibros.length = 0;
  console.log("numLibros.length ",numLibros.length)
}
//----- FUNCION PARA BUSCAR UN LIBRO CONCRETO -----//
inputBarraBusqueda.addEventListener("input", async() =>{
  //tabla.childrenNodes.remove()
  let valorInput = inputBarraBusqueda.value;
  let textoTitulo = valorInput.trim().toLowerCase();
  
  console.log("Valor Input-->", textoTitulo);
  
  //tabla.childNodes.remove()
  let datoRecibido = await comunicacionBuscar(`buscar-libros/?textoTitulo=${textoTitulo}`);
  
  numLibros.push(datoRecibido.mensaxe.length);
  //console.log("numLibros  ",numLibros)
  
  pintarTabla(datoRecibido,textoTitulo)
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