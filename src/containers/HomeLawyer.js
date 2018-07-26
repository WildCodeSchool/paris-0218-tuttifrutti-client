import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import HomeLawyerNewMission from './HomeLawyerNewMission.js'
import NewMission from '../components/NewMission.js'
import HomeLawyerMissions from './HomeLawyerMissions.js'
import Footer from './Footer.js'
import './style/HomeLawyer.css'
import { verifToken } from '../api.js';

class HomeLawyer extends Component {
  state = {
    openModal: false
  }

  onOpenModal = (e) => {
    e.preventDefault()
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) { window.location.replace('/login') } else {
			verifToken(token)
			.then(response => {
        response.json().then(responseJson => {
          if (responseJson === 'notlogged') {
            window.location.replace('/login')
          }
        })
      })
    }
  }

  render () {
    const { openModal } = this.state

    return (
      <div className='home-lawyer'>
        <div><HomeLawyerHeader /></div>
        <div className='create-new-mission' onClick={this.onOpenModal}><HomeLawyerNewMission /></div>
        <div><HomeLawyerMissions /></div>
        <div><Footer /></div>

        {/* Modal */}

        <Modal open={openModal} onClose={this.onCloseModal} center>
          <NewMission />
        </Modal>
      </div>
    )
  }
}

export default HomeLawyer
