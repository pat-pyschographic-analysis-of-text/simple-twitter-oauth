const moment = require('moment')

module.exports = async (req, res, next) => {
  console.log(`[${moment().format()}] ${req.method} - ${req.path}`)
  return next()
}
