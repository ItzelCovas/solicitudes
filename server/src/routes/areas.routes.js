const router = require('express').Router();
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller');

// Importaciones de middlewares
const { isAuthenticated } = require('../middleware/auth');
const { checkRole } = require('../middleware/authorize');
const { validate } = require('../middleware/validate');
const { createAreaSchema, updateAreaSchema } = require('../schemas/areas.schema');

// Todas las rutas requieren sesión
router.use(isAuthenticated);

// Rutas públicas (solo lectura)
router.get('/', getAll);
router.get('/:id', getById);

// Rutas protegidas (solo admin + validación de Zod)
router.post('/', checkRole('admin'), validate(createAreaSchema), create);
router.put('/:id', checkRole('admin'), validate(updateAreaSchema), update);
router.delete('/:id', checkRole('admin'), remove);

module.exports = router;