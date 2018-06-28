import React from 'react'
import { Link } from 'react-router-dom'
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

    const showDetailedMission = (id) => {
      const missionId = id
      console.log(missionId)
    }

    const eachMission = mission => {
      return (
        <div className='each-mission-container'>
          <MissionTitle text={mission.name} />
          <MissionId text={mission._id} />
          <MissionField text={mission.field} />
          <MissionDeadline text={mission.deadline} />
          <div className='button-mission-more' onClick={() => showDetailedMission(mission._id)}>
            <Link to={`/missions/${mission._id}`}><Button>Voir le détail</Button></Link>
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
