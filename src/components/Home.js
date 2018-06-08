import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Button from './Button.js'
import SignUp from './SignUp.js'
import Login from './Login.js'
import Login2 from './Login2.js'
import Footer from '../containers/Footer.js'
import FrontPage from '../containers/FrontPage.js'
import HomeLawyer from '../containers/HomeLawyer'

const Home = (req) => (

    <Router>
        <div>
            <Route path='/home' component={FrontPage}/>
        </div>
    </Router>
)

export default Home
