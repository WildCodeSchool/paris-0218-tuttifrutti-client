import React, {Component} from 'react'
import './style/App.css'
// import NewMission from './components/NewMission.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FrontPage from './containers/FrontPage.js'
import SignUp from './components//SignUp.js'
import Login from './components/Login.js'
import HomeLawyer from './containers/HomeLawyer.js'
// import Footer from './containers/Footer.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={FrontPage}/>
              <Route exact path="/reg" component={SignUp}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={HomeLawyer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
