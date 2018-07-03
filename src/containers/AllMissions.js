import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { userInfo } from '../User.js'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import './style/AllMissions.css'

class AllMissions extends React.Component {
  state = {
    allMissions: [],
    lawyer: {}
  }

  componentDidMount() {
    userInfo()
    .then(res =>
      this.setState({
        lawyer: {
          id: res._id
        }
      }))
    .then(() => {
      // console.log("blabla")
      const lawyerId = this.state.lawyer.id
      console.log(lawyerId)
      axios.post(`http://localhost:3030/missionsfiltered`, { lawyerId })
        .then((res) => {
          console.log('blabla')
          this.setState({ allMissions: res.data })
        })
        .catch((error) => {
          console.log(error);
        })
      }
    )
  }

  render() {

    const showDetailedMission = (id) => {
      const missionId = id
      console.log(missionId)
    }

    const eachMission = mission => {
      return (
        <div key={mission._id} className='each-mission-container'>
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

    const showEachMission = this.state.allMissions.map(eachMission)

    return (
      <div className='all-missions-container'>
        {showEachMission}
      </div>
    )
  }
}

export default AllMissions
