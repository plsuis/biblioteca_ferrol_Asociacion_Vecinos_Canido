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
    let respostaRecibida = await fetch("/envio-paxina-novo-libro", datoEnviadoJSON);
    console.log('respostaRecibida ',respostaRecibida)
  let respostaRecibidaJson = await respostaRecibida.json();
  console.log("respostaRecibidaJson ",respostaRecibidaJson)
if(respostaRecibidaJson != null){
    let _body = document.querySelector("[name='inside-app']");
    _body.innerHTML = respostaRecibidaJson.paxina;
}

})