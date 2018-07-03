import React from 'react'
import './style/MissionField.css'

const MissionField = ({field, subfield}) => (
  <div>
    <p className='mission-field'>{field}</p>
    <p className='mission-subfield'>{subfield}</p>
  </div>
)
export default MissionField
