import React from 'react'
import Modal from 'react-responsive-modal'
import axios from 'axios'
import { userInfo, getOldMissions } from '../api.js'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionStudent from '../components/MissionStudent.js'
import MissionDeadline from '../components/MissionDeadline.js'
import MissionPrice from '../components/MissionPrice.js'
import ReportProblem from '../components/ReportProblem.js'
import './style/OldMissions.css'

class OldMissions extends React.Component {
	state = {
		oldMissions: [],
		lawyer: {},
		open: false,
		clickedMission: '',
		studentId: ''
	}

	onOpenModal = (event) => {
		event.preventDefault()
		this.setState({ open: true})
	}

	addIdAndOpenModal = (mission, event) => {
		console.log(mission)
			this.setState({clickedMission: mission._id, studentId: mission.student})
			this.onOpenModal(event)
	}

	onCloseModal = () => {
		this.setState({ open: false })
	}

	componentDidMount() {
		userInfo()
			.then(res =>
				this.setState({
					lawyer: {
						id: res._id
					}
				}))
			.then(() => {
				const lawyerId = this.state.lawyer.id
				// axios.post(`http://localhost:3030/oldmissionsfiltered`, { lawyerId })
				getOldMissions(lawyerId)
					.then(res => {
						this.setState({ oldMissions: res })
					})
					.catch((error) => {
						console.log(error);
					})
			})
	}

	// getStudentInfo = id => {
	// 	return axios.post(`http://localhost:3030/infostudent`, {
	// 		studentId: id
	// 	})
	// 		.then (stud => stud.data)
	// }

	render() {

		const eachMission = mission => {
			console.log(mission)
			console.log(mission.student)
			// const studentName = this.getStudentInfo(mission.student)
			console.log(mission.studentName)
			const studentText = `La mission a été réalisée par ${mission.studentName}`
				return (
					<div key={mission._id} className='each-mission-container'>
						<div className='old-mission-block-title'>
							<MissionTitle text={mission.name} />
							<MissionId text={mission._id} />
						</div>
						<MissionDeadline text={mission.deadline} />
						<MissionPrice text={mission.price} />
						<MissionStudent text={studentText} />
						<div className='old-missions-button'>
							<Button>Télécharger la facture</Button>
							<div onClick={event => this.addIdAndOpenModal(mission, event)
							}><Button>Signaler un problème</Button></div>
						</div>
					</div>
				)
		}


		const showEachMission = this.state.oldMissions.map(mission => eachMission(mission))

		const { open } = this.state

		return (
			<div className='old-missions-container'>
				{showEachMission}
				<Modal open={open} onClose={this.onCloseModal} center>
					<ReportProblem close={this.onCloseModal} missionId={this.state.clickedMission} studentId={this.state.studentId}/>
				</Modal>
			</div>
		)
	}
}

export default OldMissions
