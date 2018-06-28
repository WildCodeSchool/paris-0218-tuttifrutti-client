import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import AllMissions from '../containers/AllMissions.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'

class AllMissionsPage extends React.Component {
  render () {
    return (
      <div>
        <HomeLawyerHeader />
        <MissionPageHeader to='/profile' text='< Retour au profil'/>
        <AllMissions />
        <Footer />
      </div>
    )
  }
}

export default AllMissionsPage
