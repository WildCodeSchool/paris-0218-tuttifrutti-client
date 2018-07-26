import React from 'react'
import { Link } from 'react-router-dom'
import { userInfo, getAllMissions } from '../api.js'
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
      const lawyerId = this.state.lawyer.id
			getAllMissions(lawyerId)
        .then(res => {
          this.setState({ allMissions: res })
        })
        .catch((error) => {
          console.log(error);
        })
      }
    )
  }

  render() {

    const eachMission = mission => {
      return (
        <div key={mission._id} className='each-mission-container'>
          <MissionTitle text={mission.name} />
          <MissionId text={mission._id} />
					<br />
          <MissionField text={mission.field} />
          <MissionDeadline text={mission.deadline} />
					<div className='button-mission-more'>
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
