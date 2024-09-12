//----- FUNCION PARA AUTOMATIZAR A DATA DE DEVOLUCION -----//
function dataDevolucionAuto() {
  
  var date = new Date(document.getElementById("input-data-prestamo").value);
  date.setDate(date.getDate() + 15);
  document.getElementById("input-data-devolucion").valueAsDate = date;
}

