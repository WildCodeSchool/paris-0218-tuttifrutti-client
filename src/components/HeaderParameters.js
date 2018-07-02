import React from 'react'
import './style/HeaderParameters.css'

const HeaderParameters = ({click}) => (
  <div className='account-parameters' onClick={click}>
    <p>Paramètres du compte</p>
  </div>
)

export default HeaderParameters
