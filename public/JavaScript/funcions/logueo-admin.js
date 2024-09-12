const ollo = document.querySelector(".ollo");

//----- FUNCIONS PARA VER O CONTRASINAL -----//
function verContrasinal() {
        
    if (contrasinal.type === "password") {
          contrasinal.type = "text";
          ollo.src = "../imaxes/eye-closed.svg";
    } else {
          contrasinal.type = "password";
          ollo.src = "../imaxes/eye.svg";
    }
};

ollo.addEventListener("click", async () => {
    verContrasinal();
});

//----- FUNCIONS PARA INICIAR SESION COMO ADMINISTRADOR -----//
const formulario = document.querySelector("#form-inicio-sesion");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  let formData = new FormData(formulario); 
  //console.log("o formData ", formData);

  let valores = formData.entries(); 
  const formJson = Object.fromEntries(valores); 
  //console.log(formJson);
  let obxetoEnvio = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formJson),
  };

  let respostaLogueo = await fetch("/iniciar-sesion", obxetoEnvio);

  let contestacionRecibida = await respostaLogueo.json();
  console.log("resposta ", contestacionRecibida);
  
  if (contestacionRecibida.estado == "ok") {
     

    localStorage.setItem("token", JSON.stringify(contestacionRecibida.token));
    //let menxaxeRecibida = JSON.parse(localStorage.getItem("token"));
    //console.log(menxaxeRecibida);
    let token = localStorage.getItem("token");
    let tokenParseado = JSON.parse(token);
    let datoEnviadoJSON = {
      method: "GET",
      headers: {
        Authorization: tokenParseado.token,
      },
  };

  let respostaRecibida = await fetch("/administracion", datoEnviadoJSON);
  console.log('respostaRecibida ',respostaRecibida)

    //location.replace("/administracion");
  } else {
    var condicionUsuario = document.querySelector(".condicion-usuario");
    condicionUsuario.innerHTML = "A información non é correcta";
  }
});
