import React from 'react'
import './style/MissionDescription.css'

const MissionDescription = ({text}) => (
  <div className='mission-description-block'>
    <p className='mission-description'>{text}</p>
  </div>
)
export default MissionDescription
