import React from 'react'
import LawyerMissionTitle from '../components/LawyerMissionTitle.js'
import PictoAdd from '../components/PictoAdd.js'


const HomeLawyerMissions = () => (
  <div className='home-lawyer-missions'>
    <div className='home-lawyer-currentmissions'>
      <LawyerMissionTitle className='lawyer-mission-title' text='Missions en cours'/>
    </div>
    <div className='home-lawyer-oldmissions'>
      <LawyerMissionTitle className='lawyer-mission-title' text='Historique des missions'/>
    </div>
  </div>
)

export default HomeLawyerMissions