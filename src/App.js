import React, { Component } from 'react'

import './style/App.css'
import Home from './containers/Home.js'
import SignUpStudent from './components/SignUpStudent.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Home />
        <SignUpStudent />
      </div>
    )
  }
}

export default App
