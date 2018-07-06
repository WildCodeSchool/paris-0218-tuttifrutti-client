import React from 'react'
import './style/MissionDeadline.css'

const MissionDeadline = ({text}) => (
  <div>
    <p className='mission-deadline'>Deadline :<br />{new Date(text).toLocaleString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>
)
export default MissionDeadline
