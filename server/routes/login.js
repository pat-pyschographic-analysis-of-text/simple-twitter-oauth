const oauth = require('oauth')

module.exports = async (req, res) => {
  const { auth } = req.app.locals

  auth.getOAuthRequestToken((error, token, secret, data) => {
    if(error) {
      console.error(error)
      res.send('Error While Processing OAuth Request')
    } else {
      req.session.oauth_request_token = token
      req.session.aouth_request_secret = secret

      res.redirect(`https://twitter.com/oauth/authorize?oauth_token=${req.session.oauth_request_token}`);
    }
  })
}
