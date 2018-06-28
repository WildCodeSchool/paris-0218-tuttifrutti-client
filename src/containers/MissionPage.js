import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import Mission from '../containers/Mission.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'

class MissionPage extends React.Component {
  render () {
    return (
      <div>
        <HomeLawyerHeader />
        <MissionPageHeader to='/missions' text='< Retour à la liste des missions'/>
        <Mission />
        <Footer />
      </div>
    )
  }
}

export default MissionPage
