import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import AllMissions from '../containers/AllMissions.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'
import { verifToken } from '../api.js'

class AllMissionsPage extends React.Component {
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
        <HomeLawyerHeader />
        <MissionPageHeader to='/profile' text='< Retour au profil' title='Missions en cours'/>
        <AllMissions />
        <Footer />
      </div>
    )
  }
}

export default AllMissionsPage
