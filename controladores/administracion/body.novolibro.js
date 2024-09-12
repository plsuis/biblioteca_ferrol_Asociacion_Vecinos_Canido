const { paxinasObxecto } = require("../../arquivosEncriptados/encriptacion-paxinas")

const bodyNovoLibro = (req,res) => {
    res.send({
        paxina:paxinasObxecto.paxinas.formularioLibro
    })
}

module.exports = {
    bodyNovoLibro
}