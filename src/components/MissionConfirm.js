import React, { Component } from 'react'
import axios from 'axios'
import HeaderSite from '../containers/HeaderSite.js'
import HeaderName from '../components/HeaderName.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import MissionPrice from '../components/MissionPrice.js'
import MissionDescription from '../components/MissionDescription.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Button from '../components/Button.js'
import Footer from '../containers/Footer.js'
import './style/MissionConfirm.css'

class MissionConfirm extends Component {

	state = {
		user: '',
		missionId: '',
		mission: '',
		response: ''
	}

	componentWillMount() {
		const queryString = window
			.location
			.pathname
			.split(`/`)
		this.setState({ user: queryString[3] })
		this.setState({ missionId: queryString[2] })

	}

	componentDidMount() {
		axios
			.get(`http://localhost:3030/missions/${this.state.missionId}`)
			.then((res) => {
				this.setState({ mission: res.data })
			})
		console.log(this.state.mission)
	}

	submit = () => {
		this.setState({
			mission: {...this.state.mission, student: this.state.user }
		}, () => {
			axios
				.get(`http://localhost:3030/accept/${this.state.missionId}/${this.state.mission.student}`)
				.then(res => {
					this.setState({ response: res.data })
				})
		})
	}

	showConfirmButton = () => {
		return (
			<div>
				<p className='mission-confirm-info'>
					La mission est encore disponible.
				</p>
				<div className='mission-confirm-button' onClick={this.submit}><Button>J'accepte</Button></div>
			</div>
		)
	}

	showMessage = () => {
		return (
			this.state.mission.student !== '' && this.state.response === 'Ok'
				?
				<div><p className='mission-confirm-info'>La mission vous a été attribuée.
				<br />
				Vous avez jusqu'au {new Date(this.state.mission.deadline).toLocaleString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
				<br />
				pour soumettre votre travail au cabinet.</p></div>
				:
				<div><p className='mission-confirm-info'>Désolé, la mission a déjà été attribuée.</p></div>
		)
	}

	render() {
		console.log(this.state)
		return (
			<div>
				<HeaderSite redirect={window
					.location} />
				<div className='mission-confirm-header'>
					<div>
						<HeaderName text='Bienvenue sur LITTA' />
					</div>
				</div>
				<div className='title-mission-confirm'>
					<MissionPageHeader to='' text='' title={`Nouvelle mission en ${this.state.mission.field}`}/>
				</div>
				<div>
					<div>
						<div>
							<div className='mission-confirm-container'>
								<div className='mission-content'>
									<br />
									<div className='mission-title-id'>
										<MissionTitle text={this.state.mission.name} />
										<MissionId text={this.state.missionId} />
									</div>
									<br />
									<div class='mission-infos-block'>
										<div className='mission-block1'>
											<MissionField field={this.state.mission.field} subfield={this.state.mission.subField} />
										</div>
										<div className='mission-block2'>
											<div>
												<MissionDeadline text={this.state.mission.deadline} />
												<MissionPrice text={this.state.mission.price} />
											</div>
										</div>
									</div>
									<br />
									<div className='mission-description'>
										<MissionDescription text={this.state.mission.description} />
									</div>
									<br />
									{this.state.mission.student === '' && this.state.response === '' ? this.showConfirmButton() : this.showMessage()}
								</div>
							</div>
						</div>

					</div>
				</div >
				<Footer />
			</div >
		)
	}
}

export default MissionConfirm
