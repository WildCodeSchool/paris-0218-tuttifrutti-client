
import React, { Component } from 'react'
import './style/App.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FrontPage from './containers/FrontPage.js'
import SignUp from './components//SignUp.js'
import Login from './components/Login.js'
import HomeLawyer from './containers/HomeLawyer.js'

import UserMap from './components/UserMap';
// import Footer from './containers/Footer.js'
import SignUpStudent from './components/SignUpStudent.js'

import AllMissionsPage from './containers/AllMissionsPage.js'
import MissionPage from './containers/MissionPage.js'
import OldMissionsPage from './containers/OldMissionsPage.js'


class App extends Component {
  render () {
    return (
      <div className='App'>


        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/admin" component={UserMap}/>
              <Route exact path="/regstudent" component={SignUpStudent}/>
              <Route exact path="/" component={FrontPage}/>
              <Route exact path="/reg" component={SignUp}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={HomeLawyer}/>
              <Route exact path="/missions" component={AllMissionsPage} />
              <Route exact path="/missions/:missionId" component={MissionPage} />
              <Route exact path="/oldmissions" component={OldMissionsPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
