import React from 'react'
import {Link} from 'react-router-dom'
import './style/HeaderSite.css'
import Logo from '../img/logo.png'

const HeaderSite = ({redirect, click, logout}) => (
  <div className='header'>
    <div className='header-site-logo'>
      <div>
        <Link to={redirect}>
          <img src={Logo} className='logo-litta' alt='Logo LITTA'></img>
        </Link>
      </div>
    </div>
    <div className='header-site-logout'>
      <div className='logout' onClick={click}>
        <span>{logout}</span>
      </div>
    </div>
  </div>
)

export default HeaderSite
