import React from 'react'
import { Link } from 'react-router-dom'
import MissionTitle from '../components/MissionTitle.js'
import './style/HomeLawyerMissions.css'

const HomeLawyerMissions = () => (
  <div className='home-lawyer-missions'>
    <div className='home-lawyer-currentmissions'>
      <Link to={`/missions`}><MissionTitle className='lawyer-mission-title' text='Missions en cours' /></Link>
    </div>
    <div className='home-lawyer-oldmissions'>
      <Link to={`/oldmissions`}><MissionTitle className='lawyer-mission-title' text='Historique des missions' /></Link>
    </div>
  </div>
)

export default HomeLawyerMissions
