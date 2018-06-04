import React from 'react'
import HeaderLawyerName from '../components/HeaderLawyerName.js'
import HeaderLawyerParameters from '../components/HeaderLawyerParameters.js'


const HomeLawyerHeader = () => (
  <div className='home-lawyer-header'>
    <div>
      <HeaderLawyerName />
      <HeaderLawyerParameters />
    </div>
  </div>
)

export default HomeLawyerHeader
