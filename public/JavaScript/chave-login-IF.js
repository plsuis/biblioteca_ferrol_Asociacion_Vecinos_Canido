/*****************************************************/
/* LOGUEARSE COMO ADMINISTRATIVO CUNHA CHAVE SECRETA */
/*****************************************************/

/*A idea é que calquera que sexa administrativo poda entrar como tal, sen necesidade de crear un usuario novo para unha soa vez, pero mantendo certa seguridade*/
//A chave deberá ser sinxela para que os administrativos a memoricen con facilidade
// IMPORTANTE: A chave pode verse neste JS que está na carpeta public polo que nun futuro teremos que ocultala (posiblemente mediante o token)

const ollo = document.querySelector(".ollo");
const contrasinal = document.getElementById("contrasinal");
const usuario = document.getElementById("usuario");

const botonConfirmarUsuario = document.querySelector("#boton-confirmar-usuario");

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


botonConfirmarUsuario.addEventListener("click", async () => {
    var condicionUsuario = document.querySelector(".condicion-usuario");

        
    let valorContrasinal = contrasinal.value;
    let valorUsuario = usuario.value
    if (valorContrasinal === "Canid0" && valorUsuario === "Administrador") {
        location.replace("/administracion");
          
    }else{
        condicionUsuario.innerHTML = "A información non é correcta";
          
    }

});


   