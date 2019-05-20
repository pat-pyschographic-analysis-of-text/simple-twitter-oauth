const sessions = require('express-session')
const crypto = require('crypto')

module.exports = sessions({ secret: crypto.randomBytes(256).toString('base64') })
