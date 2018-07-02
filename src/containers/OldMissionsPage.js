import React from 'react'
import Modal from 'react-responsive-modal'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import Parameters from '../components/Parameters.js'
import OldMissions from '../containers/OldMissions.js'
import OldMissionPageHeader from '../containers/OldMissionPageHeader.js'
import Footer from '../containers/Footer.js'

class OldMissionsPage extends React.Component {
  state = {
    openFirstModal: false,
    openSecondModal: false
  }

  onOpenFirstModal = (e) => {
    e.preventDefault()
    this.setState({ openFirstModal: true })
  }

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false })
  }

  render () {
    const { openFirstModal } = this.state

    return (
      <div>
        <HomeLawyerHeader click={this.onOpenFirstModal}/>
        <OldMissionPageHeader to='/profile' text='< Retour au profil' />
        <OldMissions />
        <Footer />

       {/* Modal */}

        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} center>
          <Parameters />
        </Modal>

      </div>
    )
  }
}

export default OldMissionsPage
