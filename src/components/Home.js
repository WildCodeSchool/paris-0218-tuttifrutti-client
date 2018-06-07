import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Button from './Button.js'
import SignUp from './SignUp.js'
import Login from './Login.js'
// import Tester from './Tester.js'
import Login2 from './Login2.js'

const Home = (req) => (

  <Router>
    <div>
      <div> <Link to={`/login`}> <Button text='Login' /> </Link> </div>
      <div> <Link to={`/reg`}><Button text='Sign Up' /> </Link> </div>
      <div> <Link to={`/profile`}><Button text='Sign Up' /> </Link> </div>
      <Route path='/reg' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Login2}  />
    </div>
  </Router>
)

export default Home
