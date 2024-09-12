
let botonEnviarLibro = document.querySelector(".boton-enviar-libro");

let inputTitulo = document.querySelector("#input-titulo");
let inputAutor = document.querySelector("#input-autor");
let inputXenero = document.querySelector("#input-xenero");
let inputEditorial = document.querySelector("#input-editorial");
let inputIsbn = document.querySelector("#input-isbn");

let formNovoLibro = document.querySelector("#form-novo-libro");

//----- FUNCION CREAR NOVO LIBRO -----//
formNovoLibro.addEventListener("submit", async (e)=>{
  e.preventDefault();
  let datos = new FormData(formNovoLibro);
  let obxectoDato = {};
  for(let [name,value] of datos){
    //console.log(`${name} = ${value}`)
    obxectoDato[`${name}`] = value;
  };

  let datoEnviadoJSON = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obxectoDato)

  }
let respostaRecibida = await fetch("/insertar-libro",datoEnviadoJSON);
let respostaRecibidaJSON = await respostaRecibida.json(); 
//console.log("respostaRecibidaJSON",respostaRecibidaJSON);

location.replace("/xestion-biblioteca");

})
