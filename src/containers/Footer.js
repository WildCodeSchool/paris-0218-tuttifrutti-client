import React from 'react'
import Modal from 'react-responsive-modal'
import LegalInfos from '../components/LegalInfos.js'
import './style/Footer.css'

class Footer extends React.Component {
  state = {
    openModal: false,
  }

  onOpenModal = (e) => {
    e.preventDefault()
    this.setState({ openModal: true })
  }

  onCloseModal = () => {
    this.setState({ openModal: false })
  }

  render() {
    const { openModal } = this.state

    return (
      <div className='footer'>
        <div>© 2018 SAS Legal Intern to Take Away (LITTA)</div>
        <div>contact@litta.fr -&nbsp;<span className='footer-legal-infos' onClick={this.onOpenModal}>Mentions légales</span></div>

       {/* Modal */}

        <Modal open={openModal} onClose={this.onCloseModal} center>
          <LegalInfos />
        </Modal>

      </div>
    )
  }
}

export default Footer
