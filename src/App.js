import React, { Component } from 'react'

import './style/App.css'
import Home from './containers/Home.js'
import NewMission from './components/NewMission.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Home />
      </div>
    )
  }
}

export default App
