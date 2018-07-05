import React from 'react'
import './style/MissionDeadline.css'

const MissionDeadline = ({text}) => (
  <div>
    <p className='mission-deadline'>Deadline :<br />{text}</p>
  </div>
)
export default MissionDeadline
