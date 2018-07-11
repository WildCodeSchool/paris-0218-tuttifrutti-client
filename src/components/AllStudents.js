import React from 'react'
import axios from 'axios'
import Button from '../components/Button.js'
import './style/AllStudents.css'

class AllStudents extends React.Component {
	state = {
		allUser: [],
		email: ''
	}

	componentWillMount() {

		axios
			.get(`http://localhost:3030/allstudents`)
			.then((res) => {
				console.log('blabla')
				this.setState({ allUser: res.data })
				console.log(this.state)
			})
			.catch((error) => {
				console.log(error);
			})
	}

	Submit = (event, req, res) => {
		// event.prevntDefault() console.log(event)
		const user = {
			email: this.state.email
		}
		console.log(this.state)
		axios
			.post(`http://localhost:3030/allstudents`, { user })
			.then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error);
			})
	}

	render() {

		const EachUser = (mission, key) => {

			return (
				<div key={key} className='each-student-container'>
					<div>
						<p>Utilisateur:
                            <br /> {mission.email}</p>
					</div>
					<div>
						<p>Nom: {mission.lastName}
							<br />
							Prenom: {mission.firstName}</p>
					</div>
					<div>
						<p>Email Confirmé:
                            <br />
							Statut Activation: {mission.approved}</p>
					</div>
					<div className='button-mission-more' onClick={() => this.Submit()}><Button>Activer</Button></div>
				</div>
			)
		}

		const ShowEachUser = this
			.state
			.allUser
			.map(EachUser)

		return (
			<div className='all-students-container'>
				{ShowEachUser}
			</div>
		)
	}
}

export default AllStudents
