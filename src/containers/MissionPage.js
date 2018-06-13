import React from 'react'
import Mission from '../containers/Mission.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import './style/MissionPage.css'

class MissionPage extends React.Component {

render() {
  return (
    <div>
      <MissionPageHeader />
      <Mission />
    </div>
  )
}

}

export default MissionPage