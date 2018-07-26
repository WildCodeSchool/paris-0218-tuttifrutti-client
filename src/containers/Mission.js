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
import { getOneMission } from '../api.js';

class Mission extends React.Component {
	state = {
		id: '',
		name: '',
		field: '',
		subField: '',
		deadline: '',
		price: '',
		student: ``,
		studentName: '',
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
		await getOneMission(this.missionId)
		// axios.get(`http://localhost:3030${this.missionId}`)
			.then(res => {
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
					this.setState({ ...this.state, studentName: stud.data })
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

		const noStudent = this.state.student === `La mission n'a pas encore été attribuée.`

		const styleSendMessage = {
			cursor: 'auto',
			backgroundColor: '#add',
			fontWeight: '400'
		}

		const studentText = this.state.student !== `La mission n'a pas encore été attribuée.`
			?
			`La mission a été attribuée à ${this.state.studentName}.`
			:
			this.state.student

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
					<div className='mission-student-name'><MissionStudent text={studentText} /></div>
					{/* <hr className='separator' /> */}
					<div className='buttons-mission'>
						<div className='mission-student-block'>
							<div onClick={noStudent ? undefined : this.onOpenModal} className='mission-student-message'>
								<Button
									style={{
										cursor: noStudent ? 'auto' : undefined,
										backgroundColor: noStudent ? '#add' : undefined,
										fontWeight: noStudent ? '400' : undefined
									}}
								>Envoyer un message</Button></div>
							<div className='mission-student-doc-upload'><FormUpload missionId={this.missionId}/></div>
							<div onClick={changeStatus} className='mission-student-finished'>
								<Button>Mission terminée</Button>
							</div>
						</div>
					</div>
					{/* <hr className='separator' /> */}

					<Modal open={open} onClose={this.onCloseModal} center>
						<SendMessage missionId={this.state.id} studentId={this.state.student} close={this.onCloseModal} />
					</Modal>
				</div>
			</div>
		)
	}
}

export default Mission
