import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import { userInfo } from '../User.js'
import HeaderSite from './HeaderSite.js'
import HeaderName from '../components/HeaderName.js'
import HeaderParameters from '../components/HeaderParameters.js'
import './style/HomeLawyerHeader.css'
import Parameters from '../components/Parameters.js'

class HomeLawyerHeader extends Component {
  state = {
    author: '',
    openModal: false,
  }

  onOpenModal = (e) => {
    e.preventDefault()
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  componentDidMount() {
    userInfo().then(res =>
      this.setState({ author: res.cabinet }))
  }

  render() {
    const { openModal } = this.state

    return (
      <div>
        <HeaderSite logout='Déconnexion' redirect='/profile' />
        <div className='home-lawyer-header'>
          <div>
            <HeaderName text={this.state.author} />
            <HeaderParameters click={this.onOpenModal} />
          </div>
        </div>

        {/* Modal */}

        <Modal open={openModal} onClose={this.onCloseModal} center>
          <Parameters />
        </Modal>
      </div>
    )
  }
}
export default HomeLawyerHeader
