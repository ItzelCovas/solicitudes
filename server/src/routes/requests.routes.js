const router = require('express').Router()
const { isAuthenticated } = require('../middleware/auth')
const { getAll, getById, create, update, remove } = require('../controllers/requests.controller')

const { validate } = require('../middleware/validate');
const { createRequestSchema, updateRequestSchema } = require('../schemas/requests.schema');

router.get('/', isAuthenticated, getAll)
router.get('/:id', isAuthenticated, getById)

router.post('/', isAuthenticated, validate(createRequestSchema), create)
router.put('/:id', isAuthenticated, validate(updateRequestSchema), update)

router.delete('/:id', isAuthenticated, remove)

module.exports = router
