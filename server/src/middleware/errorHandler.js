const { ZodError } = require('zod');

function errorHandler(err, req, res, next) {
    console.error(err); //imprime el error en la consola para saber qué pasó

    //Si el error viene de Zod (validación) le devuelve un 400 al cliente
    if (err instanceof ZodError) {
        return res.status(400).json({ errors: err.flatten().fieldErrors });
    }

    //Si es un error desconocido (falla de base de datos, etc) devuelve un 500
    res.status(500).json({ error: 'Error interno del servidor' });
}

module.exports = { errorHandler };