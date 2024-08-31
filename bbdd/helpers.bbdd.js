const isErro = (err) => {
                if (err) {
                    console.error(err.message);
                }
                console.log("conectado ...");
            }

module.exports = {
    isErro
}