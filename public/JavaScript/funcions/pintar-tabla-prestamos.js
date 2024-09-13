import { comunicacion, /* comunicacionBorrar, comunicacionGardar */ } from "../comunicacion/comunicacion.js";
/**************PRESTAMOOOOOOOOOOOOOOS***************/
const endpoints = {
    libros: {
      prestados:"/prestados-libros",
    }
};

//----- FUNCION PARA HABILITAR A EDICION DO LIBRO -----//
/* const editarLibro = () => {
  let editar = document.querySelectorAll(".pencil2");

  for (let element of editar) {
    element.addEventListener("click", async (e) => {
      let tds = e.target.parentElement.parentElement.children;
      //console.log("e.target ", e.target);
      for (let numTd = 0; numTd < tds.length - 1; numTd++) {
        tds[numTd].setAttribute("contenteditable", "true");
        tds[0].setAttribute("name", "edicion");
        tds[0].setAttribute("contenteditable", "true");
        tds[numTd].addEventListener("input", () => {
          tds[numTd].setAttribute("name", "edicion");
        });
      }
    });
  }
}; */

//----- FUNCION PARA GARDAR E DESHABILITAR A EDICION DO LIBRO -----//
/* const guardarActualizacionLibro = () => {
  let gardar = document.querySelectorAll(".save");
  for (let element of gardar) {
    element.addEventListener("click", async (e) => {
      let tds = e.target.parentElement.parentElement.children;
     

      for (let numTd = 0; numTd < tds.length - 1; numTd++) {
        tds[numTd].removeAttribute("name");
        tds[numTd].setAttribute("contenteditable", "false");
      }
      
      const crearObxetosModificados = (array) => {
        let obxeto = {
          titulo: array[0].textContent,
          autor: array[1].textContent,
          codigo: array[2].textContent,
          editorial: array[3].textContent,
          ano: array[4].textContent,
          xenero: array[5].textContent,
        };
        return obxeto;
      };
      
     let datoAEnviar = crearObxetosModificados(tds);
      //console.log("datoAEnviar ", datoAEnviar);
      let id = e.target.parentElement.parentElement.childNodes[2].textContent;
      //console.log("id?--> ", id);
      let datoRecibido = await comunicacionGardar(
        `/actualizar-libros/?codigo=${id}`,
        datoAEnviar,
      );

      //console.log("resposta recibida ", datoRecibido);
    });
  }
}; */

//----- FUNCION PARA BORRAR O LIBRO -----//
/* const borrarLibro = () => {
  
  let borrar = document.querySelectorAll(".bin");

  for (let element of borrar) {
    element.addEventListener("click", async (e) => {
      
      
    let id = e.target.parentElement.parentElement.childNodes[2].textContent;
    //console.log("id?--> ", id);
    let datoRecibido = await comunicacionBorrar(`/borro-libro/?codigo=${id}`);
    //console.log("datoRecibido--> ", datoRecibido);
    window.location.reload();
})};}; */
  
//----- FUNCION PARA PINTAR A TABOA DE LIBROS EDITABLE -----//
let tabla = document.querySelector(".body-tabla");

const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.libros.prestados);
    let i = 0;
    for (i = 0; i < datosRecibidos.length; i++) {
    let datosLibros = datosRecibidos[i];
    //console.log("datosLibros",datosLibros)
    let fila = document.createElement("tr");
    //console.log(fila)
    tabla.append(fila);
          //let cliente = datosConvertidos[i];
   for (let propiedade in datosLibros) {
    
   
    let celda = document.createElement("td");
    let dato = JSON.stringify(datosLibros[propiedade]);
    
    celda.innerHTML = dato.replace(/\"/g, "");
    fila.append(celda);
   };

   /*-----CREAR E ENGADIR OS BOTONS PARA EDITAR A TABOA-----*/

   let iconosTD = document.createElement("td");

   let papelera = document.createElement("img");
   papelera.setAttribute("src", "../imaxes/bin.svg");
   papelera.setAttribute("class", "bin");

   let pencil2 = document.createElement("img");
   pencil2.setAttribute("src", "../imaxes/pencil2.svg");
   pencil2.setAttribute("class", "pencil2");

   let save = document.createElement("img");
   save.setAttribute("src", "../imaxes/save.svg");
   save.setAttribute("class", "save");

   iconosTD.append(pencil2);
   pencil2.after(save);
   save.after(papelera);

   fila.append(iconosTD);
    }
   /*  borrarLibro();
    editarLibro();
    guardarActualizacionLibro(); */
    
};

resgistroInputs();  