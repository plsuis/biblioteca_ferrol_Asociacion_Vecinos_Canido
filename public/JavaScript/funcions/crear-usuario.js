let botonEnviarUsuario = document.querySelector(".boton-aceptar-usuario");
let inputNome = document.querySelector("#nome-usuario");
let inputPrimerApelido = document.querySelector("#primer-apelido-usuario");
let inputSegundoApelido = document.querySelector("#segundo-apelido-usuario");
let inputDNI = document.querySelector("#dni-usuario");
let inputRol = document.querySelector("#rol-usuario");
let formNovoUsuario = document.querySelector("#form-novo-usuario");

//----- FUNCIONS DE CREAR USUARIO -----//  
formNovoUsuario.addEventListener("submit", async (e)=>{
    e.preventDefault();
    let datos = new FormData(formNovoUsuario);
    let obxectoDato = {};
    for(let [name,value] of datos){
        console.log(`${name} = ${value}`)
        obxectoDato[`${name}`] = value;
    };
    
    let datoEnviadoJSON = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obxectoDato)
    
    }

    let respostaRecibida = await fetch("/insertar-usuarios",datoEnviadoJSON);
    let respostaRecibidaJSON = await respostaRecibida.json(); 
    //console.log("respostaRecibidaJSON",respostaRecibidaJSON);
    window.location.reload();
    });
  