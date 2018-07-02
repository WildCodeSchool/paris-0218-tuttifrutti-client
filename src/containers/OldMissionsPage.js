import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import OldMissions from '../containers/OldMissions.js'
import OldMissionPageHeader from '../containers/OldMissionPageHeader.js'
import Footer from '../containers/Footer.js'

class OldMissionsPage extends React.Component {

  render () {

    return (
      <div>
        <HomeLawyerHeader/>
        <OldMissionPageHeader to='/profile' text='< Retour au profil' />
        <OldMissions />
        <Footer />
      </div>
    )
  }
}

export default OldMissionsPage
