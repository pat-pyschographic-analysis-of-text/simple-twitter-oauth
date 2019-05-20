import ReactDOM from 'react-dom'
import React, { useState } from 'react'

const steps = [
  "A GET request is made to our server to begin authenticating the user",
  "Our server makes a request to twitter's server for an access token, with a callback URL on our domain",
  "Twitter responds with an access token from which we construct a URL to Twitter to redirect the user to sign in",
  "Once the user has signed in, Twitter redirects the user back to the specfied URL we gave them earlier."
]

function LoginButton(props) {
  const [text, setText] = useState('Login with Twitter')

  return (
    <button>
      <a onClick={_ => setText('Redirecting...')} href='/login'>{text}</a>
    </button>
  )
}

const App = _ =>
  <div>
    <ul>
      { steps.map((step, i) => <li key={i}>{i}. - {step}</li>) }
    </ul>
    <LoginButton />
  </div>

ReactDOM.render(<App />, document.getElementById('app'))
