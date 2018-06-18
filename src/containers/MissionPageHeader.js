import React from 'react'
import { Link } from 'react-router-dom'
import GoBack from '../components/GoBack.js'
import MissionTitle from '../components/MissionTitle.js'
import './style/MissionPageHeader.css'

class MissionPageHeader extends React.Component {

render() {
  return (
    <div>
      <Link to={`/profile`}><GoBack text='< Retour à la liste des missions' /></Link>
      <MissionTitle text='Missions en cours'/>
    </div>
  )
}

}

export default MissionPageHeader