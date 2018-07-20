import React from 'react'
import Modal from 'react-responsive-modal'
import axios from 'axios'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionFiles from '../components/MissionFiles.js'
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
		filesSended: [],
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

	async componentDidMount() {
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
					finished: res.data.finished,
					filesSended: res.data.filesSended
				})
			})
			.catch((error) => {
				console.log(error)
			})
		console.log('la ici', this.state.student)
		if (this.state.student === '') {
			this.setState({ ...this.state, student: `La mission n'a pas encore été attribuée.` })
		} else {
			axios.post(`http://localhost:3030/infostudent`, {
				studentId: this.state.student
			})
				.then(stud =>
					this.setState({ ...this.state, student: 'La mission a été attribuée à ' + stud.data +'.' })
				)
		}
	}

	getFileName = (fileName) => {
		console.log("yeahhhhhh", fileName)
	}

	render() {
		const changeStatus = (event) => {
			event.preventDefault()
			this.setState({ ...this.state, finished: true })
			axios.put(`http://localhost:3030${this.missionId}`, { finished: true })
				.then(() => {
					window.location.replace('/missions')
				})
		}

		const { open } = this.state
		return (
			<div className='mission-container'>
				<div className='mission-content'>
				<br />
					<div className='mission-title-id'>
						<MissionTitle text={this.state.name} />
						<MissionId text={this.state.id} />
					</div>
					<br />
					<div class='mission-infos-block'>
						<div className='mission-block1'>
							<MissionField field={this.state.field} subfield={this.state.subField} />
						</div>
						<div className='mission-block2'>
							<div>
								<MissionDeadline text={this.state.deadline} />
								<MissionPrice text={this.state.price} />
							</div>
						</div>
					</div>
					<br />
					<div className='mission-description'>
						<MissionDescription text={this.state.description} />
					</div>
					<div>
					<p>Fichiers envoyés à l'étudiant :</p>
					<MissionFiles names={this.state.filesSended}/>
					</div>
							<div className='mission-student-name'><MissionStudent text={this.state.student} /></div>
					{/* <hr className='separator' /> */}
					<div className='buttons-mission'>
						<div className='mission-student-block'>
							<div onClick={this.onOpenModal} className='mission-student-message'><Button>Envoyer un message</Button></div>
					<div className='mission-student-doc-upload'><FormUpload missionId={this.missionId}/></div>
					<div onClick={changeStatus} className='mission-student-finished'>
						<Button>Mission terminée</Button>
					</div>
						</div>
					</div>
					{/* <hr className='separator' /> */}

					<Modal open={open} onClose={this.onCloseModal} center>
						<SendMessage missionId={this.state.id} close={this.onCloseModal} />
					</Modal>
				</div>
			</div>
		)
	}
}

export default Mission
