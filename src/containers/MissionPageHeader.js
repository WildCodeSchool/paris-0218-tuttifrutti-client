import React from 'react'
import GoBack from '../components/GoBack.js'
import MissionTitle from '../components/MissionTitle.js'
import './style/MissionPageHeader.css'

class MissionPageHeader extends React.Component {

render() {
  return (
    <div>
      <GoBack text='< Retour à la liste des missions' />
      <MissionTitle text='Missions en cours'/>
    </div>
  )
}

}

export default MissionPageHeader