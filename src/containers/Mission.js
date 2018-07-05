import React from 'react'
import Modal from 'react-responsive-modal'
import axios from 'axios'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import MissionPrice from '../components/MissionPrice.js'
import MissionStudent from '../components/MissionStudent.js'
import MissionDescription from '../components/MissionDescription.js'
import SendMessage from '../components/SendMessage.js'
import './style/Mission.css'
import FormUpload from '../components/FormUpload.js'

class Mission extends React.Component {
  state = {
    id: '',
    name: '',
    field: '',
    subField: '',
    deadline: '',
    price: '',
    student: '',
    description: '',
    finished: '',
    open: false
  }

  onOpenModal = (event) => {
    event.preventDefault()
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  missionId = window.location.pathname

  async componentDidMount () {
    console.log(window.location.pathname)
    await axios.get(`http://localhost:3030${this.missionId}`)
      .then(console.log('ok'))
      .then((res) => {
        this.setState({
          id: res.data._id,
          name: res.data.name,
          field: res.data.field,
          subField: res.data.subField,
          deadline: res.data.deadline,
          price: res.data.price,
          student: res.data.student,
          description: res.data.description,
          finished: res.data.finished
        })
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('la ici', this.state.student)
    if (this.state.student === undefined) {
      this.setState({ ...this.state, student: 'Mission non attribuée' })
    } else {
      axios.post(`http://localhost:3030/infostudent`, {
        studentId: this.state.student
      })
        .then(stud =>
          this.setState({ ...this.state, student: stud.data })
        )
    }
  }

  render () {
    const changeStatus = (event) => {
      event.preventDefault()
      this.setState({ ...this.state, finished: true })
      axios.put(`http://localhost:3030${this.missionId}`, { finished: true })
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
    }

    const { open } = this.state
    return (
      <div>
        <MissionTitle text={this.state.name} />
        <MissionId text={this.state.id} />
        <MissionField field={this.state.field} subfield={this.state.subField}/>
        <MissionDeadline text={this.state.deadline} />
        <MissionPrice text={this.state.price} />
        <MissionStudent text={this.state.student} />
        <MissionDescription text={this.state.description} />
        <div className='buttons-mission'>

          <FormUpload />
          <div onClick={this.onOpenModal}><Button>Envoyer un message</Button></div>
        </div>
        <div onClick={changeStatus}>
          <Button>Mission terminée</Button>
        </div>

        <Modal open={open} onClose={this.onCloseModal} center>
          <SendMessage missionId={this.state.id} close={this.onCloseModal}/>
        </Modal>
      </div>
    )
  }
}

export default Mission
