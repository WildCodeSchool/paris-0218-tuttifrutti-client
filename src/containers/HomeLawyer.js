import React from 'react'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import HomeLawyerNewMission from './HomeLawyerNewMission.js'
import HomeLawyerMissions from './HomeLawyerMissions.js'
import Footer from './Footer.js'
import '../style/homelawyer.css'


const HomeLawyer = () => (
  <div className='home-lawyer'>
    <div><HomeLawyerHeader /></div>
    <div><HomeLawyerNewMission /></div>
    <div><HomeLawyerMissions /></div>
    <div><Footer /></div>
  </div>
)


export default HomeLawyer