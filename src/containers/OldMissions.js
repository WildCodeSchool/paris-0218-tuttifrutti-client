import React from 'react'
import Modal from 'react-responsive-modal'
import axios from 'axios'
import { userInfo } from '../User.js'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionStudent from '../components/MissionStudent.js'
import MissionDeadline from '../components/MissionDeadline.js'
import MissionPrice from '../components/MissionPrice.js'
import ReportProblem from '../components/ReportProblem.js'
import './style/OldMissions.css'

class OldMissions extends React.Component {
  state = {
    oldMissions: [],
    lawyer: {},
    open: false
  }

  onOpenModal = (event) => {
    event.preventDefault()
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
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
      axios.post(`http://localhost:3030/oldmissionsfiltered`, { lawyerId })
        .then((res) => {
          this.setState({ oldMissions: res.data })
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
          <MissionStudent text='Étudiant' />
          <MissionDeadline text={mission.deadline} />
          <MissionPrice text={mission.price} />
          <div className='old-missions-button'>
            <Button>Télécharger la facture</Button>
            <div onClick={this.onOpenModal}><Button>Signaler un problème</Button></div>
          </div>
        </div>
      )
    }


    const showEachMission = this.state.oldMissions.map(mission => eachMission(mission))

    const { open } = this.state

    return (
      <div className='old-missions-container'>
        {showEachMission}
        <Modal open={open} onClose={this.onCloseModal} center>
          <ReportProblem />
          </Modal>
      </div>
    )
  }
}

export default OldMissions
