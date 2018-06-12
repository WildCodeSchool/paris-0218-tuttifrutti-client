import React from 'react'
import MissionTitle from '../components/MissionTitle.js'
import './style/HomeLawyerMissions.css'

const HomeLawyerMissions = () => (
  <div className='home-lawyer-missions'>
    <div className='home-lawyer-currentmissions'>
      <MissionTitle className='lawyer-mission-title' text='Missions en cours' />
    </div>
    <div className='home-lawyer-oldmissions'>
      <MissionTitle className='lawyer-mission-title' text='Historique des missions' />
    </div>
  </div>
)

export default HomeLawyerMissions
