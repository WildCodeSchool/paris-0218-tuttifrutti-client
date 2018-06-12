import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login.js'

const LinkSignUpConnect = ({text1, text2, linkRoute}) => {
  return (
    <Router>
      <div>
        <p>{text1} <Link to={{linkRoute}}>{text2}</Link></p>
        <Route path={linkRoute} component={Login} />
      </div>
    </Router>
  )
}

export default LinkSignUpConnect
