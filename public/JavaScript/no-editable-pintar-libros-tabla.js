const endpoints = {
    libros: {
        leotodos:"/leo-libros"
    }
};

const comunicacion = async (endpoint) => {
    let datosRecibido = await fetch(endpoint); // GET
    return datosRecibido.json();
}


const referenciaPaxina = document.querySelector(".pax-bilbio-sen-usuario");
let tabla = document.querySelector(".body-tabla");




const resgistroInputs = async () => {
    
    let datosRecibidos = await comunicacion(endpoints.libros.leotodos);
    let i = 0;
    for (i = 0; i < datosRecibidos.lista.length; i++) {
    let datosLibros = datosRecibidos.lista[i];
    //console.log("datosLibros",datosLibros)
    let fila = document.createElement("tr");
    //console.log(fila)
    tabla.append(fila);
          //let cliente = datosConvertidos[i];
   for (let propiedade in datosLibros) {
    let celda = document.createElement("td");
    let dato = JSON.stringify(datosLibros[propiedade]);
    celda.innerHTML = dato.replace(/\"/g, "");
    fila.append(celda);
   };
    }
};

resgistroInputs();  