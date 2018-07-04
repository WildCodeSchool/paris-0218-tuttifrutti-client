import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FrontPage from './containers/FrontPage.js'
import SignUp from './components//SignUp.js'
import Login from './components/Login.js'
import HomeLawyer from './containers/HomeLawyer.js'
import AllMissionsPage from './containers/AllMissionsPage.js'
import MissionPage from './containers/MissionPage.js'
import OldMissionsPage from './containers/OldMissionsPage.js'
import SignUpStudent from './components/SignUpStudent.js';
import MissionConfirm from './components/MissionConfirm';

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
              <Route exact path="/missions" component={AllMissionsPage} />
              <Route exact path="/missions/:missionId" component={MissionPage} />
              <Route exact path="/oldmissions" component={OldMissionsPage} />
              <Route exact path="/signupstudent" component={SignUpStudent} />
              <Route path="/accept" component={MissionConfirm}  />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
