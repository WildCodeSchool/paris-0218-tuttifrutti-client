import React from 'react'
import './style/HeaderParameters.css'

const HeaderParameters = ({openParameters}) => (
  <div className='account-parameters' onClick={openParameters}>
    <p>Paramètres du compte</p>
  </div>
)

export default HeaderParameters
