import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import HomeLawyerNewMission from './HomeLawyerNewMission.js'
import Parameters from '../components/Parameters.js'
import NewMission from '../components/NewMission.js'
import HomeLawyerMissions from './HomeLawyerMissions.js'
import LegalInfos from '../components/LegalInfos.js'
import Footer from './Footer.js'
import './style/HomeLawyer.css'

class HomeLawyer extends Component {
  state = {
    openFirstModal: false,
    openSecondModal: false,
    openThirdModal: false
  }

  onOpenFirstModal = (e) => {
    e.preventDefault()
    this.setState({ openFirstModal: true })
  }

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false })
  }

  onOpenSecondModal = (e) => {
    e.preventDefault()
    this.setState({ openSecondModal: true })
  }

  onCloseSecondModal = () => {
    this.setState({ openSecondModal: false })
  }

  onOpenThirdModal = (e) => {
    e.preventDefault()
    this.setState({ openThirdModal: true })
  }

  onCloseThirdModal = () => {
    this.setState({ openThirdModal: false })
  }

  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) { window.location.replace('/login') } else {
      fetch(`http://localhost:3030/secure`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      ).then(response => {
        response.json().then(responseJson => {
          console.log(responseJson)
          if (responseJson === 'notlogged') {
            console.log('blop')
            window.location.replace('/login')
          }
        })
      })
    }
  }

  render () {
    const { openFirstModal, openSecondModal, openThirdModal } = this.state

    return (
      <div className='home-lawyer'>
        <div><HomeLawyerHeader click={this.onOpenFirstModal}/></div>
        <div className='create-new-mission' onClick={this.onOpenSecondModal}><HomeLawyerNewMission /></div>
        <div><HomeLawyerMissions /></div>
        <div><Footer click={this.onOpenThirdModal}/></div>

        {/* Modal */}

        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} center>
          <Parameters />
        </Modal>
        <Modal open={openSecondModal} onClose={this.onCloseSecondModal} center>
          <NewMission />
        </Modal>
        <Modal open={openThirdModal} onClose={this.onCloseThirdModal} center>
          <LegalInfos />
        </Modal>

      </div>
    )
  }
}

export default HomeLawyer
