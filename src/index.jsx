import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { firebaseConnect, populate } from 'react-redux-firebase'

import store from './store'
import Routes from './routes'

import './styles/index'

const App = () => (
  <div>
    <Routes />
  </div>
)

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
