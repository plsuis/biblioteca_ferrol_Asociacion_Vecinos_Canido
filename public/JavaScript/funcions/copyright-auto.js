    //----- FUNCIONS PARA ACTUALIZAR O ANO DO COPYRIGHT -----//

    const copyright = document.querySelector('.copyright');

    const AnoActual = new Date().getFullYear();
    
    const copyrightTexto = `&#169; ${AnoActual} Asociación Veciñal de Canido`;
    copyright.innerHTML = copyrightTexto;