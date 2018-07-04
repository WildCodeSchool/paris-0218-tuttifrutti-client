import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import Mission from '../containers/Mission.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'

class MissionPage extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) { window.location.replace('/login') } else {
      fetch(`http://localhost:3030/secure`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      ).then(response => {
        response.json().then(responseJson => {
          console.log(responseJson)
          if (responseJson === 'notlogged') {
            console.log('blop')
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
        <MissionPageHeader to='/missions' text='< Retour à la liste des missions'/>
        <Mission />
        <Footer />
      </div>
    )
  }
}

export default MissionPage
