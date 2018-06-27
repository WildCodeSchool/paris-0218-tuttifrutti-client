import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import HomeLawyerNewMission from './HomeLawyerNewMission.js'
import NewMission from '../components/NewMission.js'
import HomeLawyerMissions from './HomeLawyerMissions.js'
import Footer from './Footer.js'
import './style/HomeLawyer.css'

class HomeLawyer extends Component {

  state = {
    open: false
  }

  onOpenModal = (event) => {
    event.preventDefault()
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  componentWillMount() {
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

  render() {

    const { open } = this.state

    return (
      <div className='home-lawyer'>
        <div><HomeLawyerHeader /></div>
        <div className='create-new-mission' onClick={this.onOpenModal}><HomeLawyerNewMission /></div>
        <div><HomeLawyerMissions /></div>
        <div><Footer /></div>

        {/* Modal */}

        <Modal open={open} onClose={this.onCloseModal} center>
          <NewMission />
        </Modal>

      </div>
    )
  }
}

export default HomeLawyer
