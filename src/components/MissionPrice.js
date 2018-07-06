import React from 'react'
import './style/MissionPrice.css'

const MissionPrice = ({text}) => (
  <div>
    <p className='mission-price'>Rémunération : <span className='mission-price-price'>{text}€</span></p>
  </div>
)
export default MissionPrice
