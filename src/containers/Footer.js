import React from 'react'
import './style/Footer.css'

const Footer = ({click}) => (
  <div className='footer'>
    <div>© 2018 SAS Legal Intern to Take Away (LITTA)</div>
    <div>contact@litta.fr -&nbsp;<span className='footer-legal-infos' onClick={click}>Mentions légales</span></div>
  </div>
)

export default Footer
