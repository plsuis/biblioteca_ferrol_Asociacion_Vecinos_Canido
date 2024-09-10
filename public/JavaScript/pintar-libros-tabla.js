const endpoints = {
    libros: {
        leotodos:"/leo-libros",
        borrar:"/borro-libro/",
    }
};
/////// COMUNICACION
const comunicacion = async (endpoint) => {
    let datosRecibido = await fetch(endpoint); // GET
    return datosRecibido.json();
}

export const comunicacionBorrar = async (endpoint) => {
    /* const adaptoToken = () => {
      let user = JSON.parse(localStorage.getItem("usuario"));
      return user.usuario;
    }; */
    let datoEnviado = {
      method: "DELETE",
      /* headers: { Authorization: adaptoToken() }, */
    };
    /* console.log("BORRANDO CON TOKEN"); */
    let datosRecibido = await fetch(endpoint, datoEnviado); // delete
  
    let datosRecibidoJson = await datosRecibido.json();
    
    
    
    return datosRecibidoJson;
};


//BORRAR FILA/////////////
export const borrarFila = () => {
    let borrar = document.querySelectorAll(".bin");
  
    for (let element of borrar) {
      element.addEventListener("click", async (e) => {
        
        
        let titulo = 
          e.target.parentElement.parentElement.childNodes[0].textContent;
        console.log(
            "e.target(titulo) borrar--> ",
            titulo,
          );
        let datoRecibido = await comunicacionBorrar(`/borro-libro/${titulo}`);
        console.log("lo de arriba funciona???????????????");
        let datoRecibidoJson = await datoRecibido.json();
      console.log(datoRecibidoJson);


      window.location.reload();
      return datoRecibidoJson;
        
      });
    }
  };


////PINTAR TABLA
const referenciaPaxina = document.querySelector(".pax-bilbio-sen-usuario");
let tabla = document.querySelector(".body-tabla");

const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.libros.leotodos);
    let i = 0;
    for (i = 0; i < datosRecibidos.lista.length; i++) {
    let datosLibros = datosRecibidos.lista[i];
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
   //////////////////crear td con iconitos
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

    borrarFila();
};

resgistroInputs();  