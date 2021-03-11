const router = require('express').Router()

router.use('/api', require('tables.js'))

module.exports = router