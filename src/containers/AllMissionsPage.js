import React from 'react'
import Modal from 'react-responsive-modal'
import HomeLawyerHeader from './HomeLawyerHeader.js'
import Parameters from '../components/Parameters.js'
import AllMissions from '../containers/AllMissions.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'

class AllMissionsPage extends React.Component {
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
        <MissionPageHeader to='/profile' text='< Retour au profil'/>
        <AllMissions />
        <Footer />

        {/* Modal */}

        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} center>
          <Parameters />
        </Modal>

      </div>
    )
  }
}

export default AllMissionsPage
