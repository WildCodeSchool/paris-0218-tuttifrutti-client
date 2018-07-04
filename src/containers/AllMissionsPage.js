import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import AllMissions from '../containers/AllMissions.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'

class AllMissionsPage extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      window.location.replace('/login')
    } else {
      fetch(`http://localhost:3030/secure`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        response.json().then(responseJson => {
          console.log(responseJson)
          if (responseJson === 'not logged') {
            console.log('test')
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
        <MissionPageHeader to='/profile' text='< Retour au profil'/>
        <AllMissions />
        <Footer />
      </div>
    )
  }
}

export default AllMissionsPage
