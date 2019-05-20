module.exports = (req, res) => {
  const { auth } = req.app.locals
  const { oauth_token, oauth_verifier } = req.query 

  auth.getOAuthAccessToken(req.session.oauth_request_token, req.session.oauth_request_secret, oauth_verifier, (error, token, secret, data) => {
    if(error) {
      console.error(error)
      res.send('Error Occured While Processing Access Token')
    } else {
      req.session.oauth_access_token = token
      req.session.oauth_access_secret = secret

      res.redirect('/home')
    }
  })
}
