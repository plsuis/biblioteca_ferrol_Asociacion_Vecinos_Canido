
export const comunicacion = async (endpoint) => {
    let datosRecibido = await fetch(endpoint); // GET
    return datosRecibido.json();
}

export const comunicacionGardar = async (endpoint, datos) => {
  
  let datoEnviado = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datos),
  };
 
  let datosRecibido = await fetch(endpoint, datoEnviado); 
  let datosRecibidoJson = await datosRecibido.json();

  return datosRecibidoJson;
};

export const comunicacionBorrar = async (endpoint) => {

  let datoEnviado = {
    method: "DELETE"
  };
  console.log("xxxxxxxx", datoEnviado)

  let datosRecibido = await fetch(endpoint,datoEnviado); 
  let datosRecibidoJson = await datosRecibido.json();

  return datosRecibidoJson;
};

export const comunicacionBuscar = async (endpoint) => {
  let datoEnviado = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify()
  };
  let datosRecibido = await fetch(endpoint,datoEnviado); 
  let datosRecibidoJson = await datosRecibido.json();

  return datosRecibidoJson;
  };