import React from 'react'
import axios from 'axios'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import './style/AllMissions.css'

class AllMissions extends React.Component {
  state = {
    allMissions: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3030/missions`)
      .then((res) => {
        this.setState({ allMissions: res.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    const eachMission = mission => {
      return (
        <div className='each-mission-container'>
          <MissionTitle text={mission.name} />
          <MissionId text={mission.id} />
          <MissionField text={mission.field} />
          <MissionDeadline text={mission.deadline} />
          <div className='button-mission-more'>
            <Button>Voir le détail</Button>
          </div>
        </div>
      )
    }

    const showEachMission = this.state.allMissions.map(mission => eachMission(mission))

    return (
      <div className='all-missions-container'>
        {showEachMission}
      </div>
    )
  }
}

export default AllMissions
