import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import FrontPage from './FrontPage.js'

const Home = (req) => (

    <Router>
        <div>
            <Route path='/home' component={FrontPage}/>
        </div>
    </Router>
)

export default Home
