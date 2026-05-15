const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/requests.controller')

const { isAuthenticated } = require('../middleware/auth')

router.get('/', isAuthenticated, getAll)
router.get('/:id', isAuthenticated, getById)
router.post('/', isAuthenticated, create)
router.put('/:id', isAuthenticated, update)
router.delete('/:id', isAuthenticated, remove)

module.exports = router
