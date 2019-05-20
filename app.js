const express = require('express');
const oauth = require('oauth')
const path = require('path')

const middleware = require('./server/middleware')
const routes = require('./server/routes')

const keys = { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = process.env 

const app = express()

app.locals.keys = keys

app.locals.auth = new oauth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  '1.0',
  'http://localhost:8080/redirect/',
  'HMAC-SHA1'
)

app.use(middleware)
app.use(routes)

app.use(express.static(path.resolve(__dirname + '/build')))
app.listen(8080, () => console.log('Server started on localhost:8080'))
