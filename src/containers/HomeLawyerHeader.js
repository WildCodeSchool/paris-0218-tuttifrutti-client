import React from 'react'
import HeaderName from '../components/HeaderName.js'
import HeaderParameters from '../components/HeaderParameters.js'
import './style/HomeLawyerHeader.css'


const HomeLawyerHeader = () => (
  <div className='home-lawyer-header'>
    <div>
      <HeaderName />
      <HeaderParameters />
    </div>
  </div>
)

export default HomeLawyerHeader
