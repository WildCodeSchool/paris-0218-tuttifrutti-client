import React from 'react'
import './style/MissionId.css'

const MissionId = ({text}) => (
  <div>
    <p className='mission-id'>Mission n° {text.slice(-5)}</p>
  </div>
)
export default MissionId
