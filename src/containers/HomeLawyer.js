import React, {Component} from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import HomeLawyerNewMission from './HomeLawyerNewMission.js'
import HomeLawyerMissions from './HomeLawyerMissions.js'
import Footer from './Footer.js'
import './style/HomeLawyer.css'

class HomeLawyer extends Component {
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
      <div className='home-lawyer'>
        <div><HomeLawyerHeader /></div>
        <div><HomeLawyerNewMission /></div>
        <div><HomeLawyerMissions /></div>
        <div><Footer /></div>
      </div>
    )
  }
}

export default HomeLawyer
