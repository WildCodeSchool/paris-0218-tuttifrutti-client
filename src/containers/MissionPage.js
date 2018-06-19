import React from 'react'
import Mission from '../containers/Mission.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'
import './style/MissionPage.css'

class MissionPage extends React.Component {

render() {
  return (
    <div>
      <MissionPageHeader to='/missions' text='< Retour à la liste des missions'/>
      <Mission />
      <Footer />
    </div>
  )
}

}

export default MissionPage
