import React, { Component } from 'react'

import './App.css'
import Home from './components/Home.js'
import HomeLawyer from './containers/HomeLawyer.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Home />
        <HomeLawyer />
      </div>
    )
  }
}

export default App
