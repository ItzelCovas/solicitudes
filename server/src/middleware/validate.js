const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return next(result.error); //en lugar de res.status(400), le pasamos el error a nuestro middleware de manejo de errores
    }
    req.body = result.data; 
    next();
};

module.exports = { validate };