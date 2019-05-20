module.exports = (req, res) => {
  const { auth } = req.app.locals

  if(!req.session.req.session.oauth_access_token) {
    res.redirect('/')
  }

  auth.get('https://api.twitter.com/1.1/account/verify_credentials.json', req.session.oauth_access_token, req.session.oauth_access_secret, (error, data, _) => {
    if(!error) {
      res.type('json')
      res.send(data)
    }
  })
}
