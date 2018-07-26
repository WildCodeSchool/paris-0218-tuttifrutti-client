import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-responsive-modal'
import { userInfo } from '../api.js'
import HeaderSite from './HeaderSite.js'
import HeaderName from '../components/HeaderName.js'
import HeaderParameters from '../components/HeaderParameters.js'
import './style/HomeLawyerHeader.css'
import ParametersLawyer from '../components/ParametersLawyer.js'

class HomeLawyerHeader extends Component {
  state = {
    author: '',
    openModal: false
  }

  LogOut = (req, res) => {
    localStorage.removeItem('token')
    console.log('Logout')
    window.location.replace('http://localhost:3000/login')
  }

  onOpenModal = (e) => {
    e.preventDefault()
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  componentDidMount () {
    userInfo().then(res =>
      this.setState({ author: res.cabinet }))
	}

	parametersUpdated = (cabinet) => {
		this.setState({ author: cabinet })
}

  render () {
    const { openModal } = this.state

    return (
      <div>
        <HeaderSite click={this.LogOut} logout='Déconnexion' redirect='/profile' />
        <div className='home-lawyer-header'>
          <div>
            <HeaderName text={this.state.author} />
            <HeaderParameters click={this.onOpenModal} />
          </div>
        </div>

        {/* Modal */}

        <Modal open={openModal} onClose={this.onCloseModal} center>
          <ParametersLawyer update={this.parametersUpdated}/>
        </Modal>
      </div>
    )
  }
}
export default HomeLawyerHeader
