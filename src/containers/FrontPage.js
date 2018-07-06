import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSite from './HeaderSite.js'
import PageTitle from '../components/PageTitle.js'
import Button from '../components/Button.js'
import Footer from './Footer.js'
import './style/FrontPage.css'

class FrontPage extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token !== null) { window.location.replace('/profile') }
  }

  render () {
    return (
      <div>
        <HeaderSite logout='' redirect='/' />
        <div className='front-container'>
          <div className='front-title'>
            <PageTitle espace='Espace avocat' title='Accueil' />
          </div>
          <div className='front-text'>
            <p>Bienvenue sur la platforme LITTA.<br />Pour vous connecter ou vous inscrire, cliquez sur l'un des liens ci-dessous.</p>
          </div>
          <div className='front-button'>
            <Link to={`/login`}><Button>Se connecter</Button></Link>
            <Link to={`/reg`}><Button>S'inscrire</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default FrontPage
