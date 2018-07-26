import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import Mission from '../containers/Mission.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'
import { verifToken } from '../api.js';

class MissionPage extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) { window.location.replace('/login') } else {
			verifToken(token)
			.then(response => {
        response.json().then(responseJson => {
          if (responseJson === 'notlogged') {
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
        <MissionPageHeader to='/missions' text='< Retour à la liste des missions' title='Mission en cours'/>
        <Mission />
        <Footer />
      </div>
    )
  }
}

export default MissionPage
