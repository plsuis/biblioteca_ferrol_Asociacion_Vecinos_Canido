
const endpoints = {
  usuario: {
        leotodos:"/leo-usuarios",
        borrar:"/borro-usuario/",
        actualizar:"/actualizar-usuarios/",
    }
};


/////// COMUNICACION
const comunicacion = async (endpoint) => {
    let datosRecibido = await fetch(endpoint); // GET
    return datosRecibido.json();
}

export const comunicacionGardar = async (endpoint, datos) => {
  
  let datoEnviado = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datos),
  };
 
  let datosRecibido = await fetch(endpoint, datoEnviado); 
  let datosRecibidoJson = await datosRecibido.json();

  return datosRecibidoJson;
};

const comunicacionBorrar = async (endpoint) => {

  let datoEnviado = {
    method: "DELETE"
  };
  console.log("xxxxxxxx", datoEnviado)

  let datosRecibido = await fetch(endpoint,datoEnviado); 
  let datosRecibidoJson = await datosRecibido.json();

  return datosRecibidoJson;
};
/////////////////
/////////////////
const editarUsuario = () => {
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
};

const guardarActualizacionUsuario = () => {
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
          nome: array[0].textContent,
          apelidouno: array[1].textContent,
          apelidodos: array[2].textContent,
          dni: array[3].textContent,
          rol: array[4].textContent,
        };
        return obxeto;
      };
      
     let datoAEnviar = crearObxetosModificados(tds);
      console.log("datoAEnviar ", datoAEnviar);
      let id = e.target.parentElement.parentElement.childNodes[3].textContent;
      console.log("id?--> ", id);
      let datoRecibido = await comunicacionGardar(
        `/actualizar-usuarios/`,
        datoAEnviar,
      );

      console.log("resposta recibida ", datoRecibido);
    });
  }
};

const borrarUsuario = () => {
  
  let borrar = document.querySelectorAll(".bin");

  for (let element of borrar) {
    element.addEventListener("click", async (e) => {
      
      
    let id = e.target.parentElement.parentElement.childNodes[3].textContent;
    console.log("id?--> ", id);
    let datoRecibido = await comunicacionBorrar(`borro-usuario/?dni=${id}`);
    console.log("datoRecibido--> ", datoRecibido);
})};};




  
////PINTAR TABLA
let tabla = document.querySelector(".body-tabla");

const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.usuario.leotodos);
    let i = 0;
    for (i = 0; i < datosRecibidos.lista.length; i++) {
    let datosUsuarios = datosRecibidos.lista[i];
    //console.log("datosUsuarios",datosUsuarios)
    let fila = document.createElement("tr");
    //console.log(fila)
    tabla.append(fila);
          //let cliente = datosConvertidos[i];
   for (let propiedade in datosUsuarios) {
    let celda = document.createElement("td");
    let dato = JSON.stringify(datosUsuarios[propiedade]);
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
    borrarUsuario();
    editarUsuario();
    guardarActualizacionUsuario();
    
};

resgistroInputs();  