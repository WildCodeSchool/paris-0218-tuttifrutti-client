import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import OldMissions from '../containers/OldMissions.js'
import OldMissionPageHeader from '../containers/OldMissionPageHeader.js'
import Footer from '../containers/Footer.js'
import { verifToken } from '../api.js';

class OldMissionsPage extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      window.location.replace('/login')
    } else {
			verifToken(token)
			.then(response => {
        response.json().then(responseJson => {
          if (responseJson === 'not logged') {
            window.location.replace('/login')
          }
        })
      })
    }
  }

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
