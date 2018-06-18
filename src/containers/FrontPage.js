import React from 'react'
import {Link} from 'react-router-dom'
import Login from '../components/Login.js'
import SignUp from '../components/SignUp.js'
import Button from '../components/Button.js'

const FrontPage = () => (
    <div>
      <Link to={`/login`}><Button>Se connecter</Button></Link>
      <Link to={`/reg`}><Button>S'inscrire</Button></Link>
    </div>
)

export default FrontPage
