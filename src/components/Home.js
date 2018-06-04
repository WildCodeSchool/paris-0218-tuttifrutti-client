import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Button from './Button.js'
import SignUp from './SignUp.js'
import Login from './Login.js'

const Home = (req) => (

  <Router>
    <div>
      <div> <Link to={`/login`}> <Button text='Login' /> </Link> </div>
      <div> <Link to={`/reg`}><Button text='Sign Up' /> </Link> </div>
      <Route path='/reg' component={SignUp} />
      <Route path='/login' component={Login} />
    </div>
  </Router>
)

export default Home
