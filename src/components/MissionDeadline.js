import React from 'react'
import './style/MissionDeadline.css'


//const sliceDate = (arg) => {return arg.slice(0,10)}

const MissionDeadline = ({text}) => (
  <div>
    <p className='mission-deadline'>{/*sliceDate*/(text)}</p>
  </div>
)
export default MissionDeadline
