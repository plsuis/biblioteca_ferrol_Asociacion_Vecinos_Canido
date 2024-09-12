const { paxinasObxecto } = require("../../arquivosEncriptados/encriptacion-paxinas")

const bodyAdministracion = (req,res)=>{

    res.send({
        paxina:paxinasObxecto.paxinas.inicioAdmin
    })
}

module.exports = {
    bodyAdministracion
}