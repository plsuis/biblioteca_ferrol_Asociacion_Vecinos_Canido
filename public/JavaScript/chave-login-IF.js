/*****************************************************/
/* LOGUEARSE COMO ADMINISTRATIVO CUNHA CHAVE SECRETA */
/*****************************************************/

/*A idea é que calquera que sexa administrativo poda entrar como tal, sen necesidade de crear un usuario novo para unha soa vez, pero mantendo certa seguridade*/
//A chave deberá ser sinxela para que os administrativos a memoricen con facilidade
// IMPORTANTE: A chave pode verse neste JS que está na carpeta public polo que nun futuro teremos que ocultala (posiblemente mediante o token)

const ollo = document.querySelector(".ollo");
const chaveSecreta = document.getElementById("chave-secreta");
const botonConfirmarUsuario = document.querySelector("#boton-confirmar-usuario");

function verContrasinal() {
        
    if (chaveSecreta.type === "password") {
          chaveSecreta.type = "text";
          ollo.src = "../imaxes/eye-closed.svg";
    } else {
          chaveSecreta.type = "password";
          ollo.src = "../imaxes/eye.svg";
    }
};

ollo.addEventListener("click", async () => {
    verContrasinal();
});



botonConfirmarUsuario.addEventListener("click", async () => {
    var condicionUsuario = document.querySelector(".condicion-usuario");

        
    let infoInput = chaveSecreta.value;
    if (infoInput === "Canid0") {
        location.replace("/administracion");
          
    }else{
        condicionUsuario.innerHTML = "A chave non é correcta";
          
    }

});


   