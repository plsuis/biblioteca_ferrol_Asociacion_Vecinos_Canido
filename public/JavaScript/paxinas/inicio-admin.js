document.addEventListener("DOMContentLoaded", async () => {

    let token = localStorage.getItem("token");
    let tokenParseado = JSON.parse(token);

    let datoEnviadoJSON = {
        method: "GET",
        headers: {
          Authorization: tokenParseado.token,
        },
    };
    console.log("datoEnviado ",datoEnviadoJSON)
    let respostaRecibida = await fetch("/administracion", datoEnviadoJSON);
    console.log('respostaRecibida ',respostaRecibida)
  let respostaRecibidaJson = await respostaRecibida.json();
  
if(respostaRecibidaJson != null){
    let _body = document.querySelector("[name='inside-app']");
    _body.innerHTML = respostaRecibidaJson.paxina;
}

})