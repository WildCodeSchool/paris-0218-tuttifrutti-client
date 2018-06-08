import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login from '../components/Login.js'
import SignUp from '../components/SignUp.js'
import HomeLawyer from '../containers/HomeLawyer.js'
import Button from '../components/Button.js'

const FrontPage = () => (
    <Router>
        <div>
            <Link to={`/login`}><Button text='Se connecter'/></Link>
            <Link to={`/reg`}><Button text="S'inscrire"/></Link>
            <Route path='/login' component={Login}/>
            <Route path='/reg' component={SignUp}/>
        </div>
    </Router>
)

export default FrontPage