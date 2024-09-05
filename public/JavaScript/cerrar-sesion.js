
let sair = document.querySelector(".cerrar-sesion")

sair.addEventListener("click", () => {
    localStorage.removeItem("usuario"); // BORRA USUARIO
    location.replace("/"); // SALE DE VOLTA AO INICIO DA APP
  });