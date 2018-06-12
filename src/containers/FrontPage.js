import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login from '../components/Login.js'
import SignUp from '../components/SignUp.js'
import Button from '../components/Button.js'

const FrontPage = () => (
    <Router>
        <div>
            <Link to={`/login`}><Button>Se connecter</Button></Link>
            <Link to={`/reg`}><Button>S'inscrire</Button></Link>
            <Route path='/login' component={Login}/>
            <Route path='/reg' component={SignUp}/>
        </div>
    </Router>
)

export default FrontPage