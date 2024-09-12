//----- FUNCION PARA CERRAR SESION -----//
let sair = document.querySelector(".cerrar-sesion")

sair.addEventListener("click", () => {
    localStorage.removeItem("usuario"); 
    location.replace("/"); 
  });