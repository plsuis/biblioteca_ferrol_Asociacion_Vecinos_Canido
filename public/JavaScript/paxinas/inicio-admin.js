

document.addEventListener("DOMContentLoaded", async () => {

    let token = localStorage.getItem("usuario");
    console.log("token ",token)
    let tokenParseado = JSON.parse(token);
    console.log("tokenParseado ",tokenParseado)
    let datoEnviadoJSON = {
        method: "GET",
        headers: {
          "Authorization": tokenParseado.usuario,
        },
    };
    console.log("datoEnviado ",datoEnviadoJSON)
    let respostaRecibida = await fetch("/envio-paxina-admin", datoEnviadoJSON);
    console.log('respostaRecibida ',respostaRecibida)
  let respostaRecibidaJson = await respostaRecibida.json();
  console.log("respostaRecibidaJson ",respostaRecibidaJson)
if(respostaRecibidaJson != null){
    let _body = document.querySelector("[name='inside-app']");
    _body.innerHTML = respostaRecibidaJson.paxina;
}
const copyright = document.querySelector('.copyright');

const AnoActual = new Date().getFullYear();

const copyrightTexto = `&#169; ${AnoActual} Asociación Veciñal de Canido`;
copyright.innerHTML = copyrightTexto;

let sair = document.querySelector(".cerrar-sesion")
  sair.addEventListener("click", () => {
    localStorage.removeItem("usuario"); 
    location.replace("/"); 
  });

})