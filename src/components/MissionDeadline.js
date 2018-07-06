import React from 'react'
import './style/MissionDeadline.css'

const MissionDeadline = ({text}) => (
  <div>
    <p className='mission-deadline'>Deadline : <span className='mission-deadline-date'>{new Date(text).toLocaleString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span></p>
  </div>
)
export default MissionDeadline
