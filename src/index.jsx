import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import './styles'

const App = () => (
  <div>
    <Routes />
  </div>
)

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
