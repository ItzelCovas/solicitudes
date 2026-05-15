const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')
const { isAuthenticated } = require('../middleware/auth')
const { checkRole } = require('../middleware/authorize')

router.use(isAuthenticated) // Todas las rutas requieren autenticación

// Rutas de lectura (disponibles para todos los usuarios autenticados)
router.get('/', getAll)
router.get('/:id', getById)

// Solo los usuarios con rol 'admin' pueden crear, actualizar o eliminar áreas
router.post('/', checkRole(['admin']), create)
router.put('/:id', checkRole(['admin']), update)
router.delete('/:id', checkRole(['admin']), remove)

module.exports = router
