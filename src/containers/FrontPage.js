import React from 'react'
import {Link} from 'react-router-dom'
import HeaderSite from './HeaderSite.js'
import Button from '../components/Button.js'
import Footer from './Footer.js'

const FrontPage = () => (

    <div>
      <HeaderSite redirect='/'/>
      <Link to={`/login`}><Button>Se connecter</Button></Link>
      <Link to={`/reg`}><Button>S'inscrire</Button></Link>
      <Footer />
    </div>

)

export default FrontPage
