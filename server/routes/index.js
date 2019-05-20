const router = require('express').Router()

router.use('/login', require('./login'))
router.use('/redirect', require('./redirect'))
router.use('/home', require('./home'))

module.exports = router
