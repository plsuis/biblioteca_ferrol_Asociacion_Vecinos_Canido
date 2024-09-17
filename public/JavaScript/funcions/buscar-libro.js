//document.querySelector(`[wiid=${num}]`)
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

const pintarHead = (datoRecibido) => {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for(let libro in datoRecibido.mensaxe[0]){
    console.log(`${libro} = ${datoRecibido.mensaxe[0][libro]}`)
    let th = document.createElement("th");
    th.innerHTML = libro;
    tr.append(th)
    thead.append(tr)
  }
  tabla.append(thead)
}
const pintarTabla = (datoRecibido,condicion)=>{
  console.log("condicion ",condicion)
  let tbody = document.createElement("tbody");
  if(condicion){
    let refTbody = document.querySelector("tbody");
    refTbody.remove()
  }
  
  for(let libro of datoRecibido.mensaxe){
    let tr = document.createElement("tr");
    for(let propiedadLibro in libro){
      let td = document.createElement("td");
      td.innerHTML = libro[propiedadLibro];
      tr.append(td)
    }
    tbody.append(tr)
    tabla.append(tbody)
  }
}
//----- FUNCION PARA BUSCAR UN LIBRO CONCRETO -----//
inputBarraBusqueda.addEventListener("input", async() =>{
  let tbody = document.createElement("tbody");
  let valorInput = inputBarraBusqueda.value;
  let textoTitulo = valorInput.trim().toLowerCase();
  
  console.log("Valor Input-->", textoTitulo);
  
  if(textoTitulo !== ""){
    let datoRecibido = await comunicacionBuscar(`buscar-libros/?textoTitulo=${textoTitulo}`);
    console.log("datoRecibido.mensaxe ",datoRecibido.mensaxe)
    
    let condicion = textoTitulo.length > 1;
    
    if(condicion){
      console.log("textoTitulo.length > 1 ",textoTitulo)
      pintarTabla(datoRecibido,condicion)
    }else{
      pintarHead(datoRecibido)
      pintarTabla(datoRecibido,condicion)
    }
  }else if(textoTitulo == ""){
    console.log("tabla.childElementCount ?",tabla.childElementCount)
    for(let i = tabla.childElementCount - 1;i >= 0; i--){
      console.log(i)
      tabla.children[i].remove()
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