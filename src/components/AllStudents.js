import React from 'react'
import axios from 'axios'
import Button from '../components/Button.js'
import './style/AllStudents.css'

class AllStudents extends React.Component {
	state = {
		allUsers: []
	}

	componentWillMount() {

		axios
			.get(`http://localhost:3030/allstudents`)
			.then((res) => {
				console.log('blabla')
				this.setState({ allUsers: res.data })
				console.log(this.state)
			})
			.catch((error) => {
				console.log(error);
			})
	}

	Submit = async (student) => {
		axios
			.post(`http://localhost:3030/allstudents`, { student })
			.then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	render() {

		const EachUser = (student, key) => {

			return (
				<div key={key} className='each-student-container'>
					<div>
						<p>
							{student.firstName} {student.lastName}
							</p>
					</div>
					<div>
					<div>
						<p>{student.email}</p>
					</div>
						<p>{student.activated === true ? "Email vérifié" : "Email non vérifié"}
            <br />
						{student.approved === true ? "Compte actif" : "Compte inactif"}</p>
					</div>
					<div className='button-student-more' onClick={() => this.Submit(student)}>
					<Button>{student.approved === true ? "Désactiver" : "Activer"}</Button></div>
				</div>
			)
		}

		const ShowEachUser = this
			.state
			.allUsers
			.map(EachUser)

		return (
			<div className='all-students-container'>
				{ShowEachUser}
			</div>
		)
	}
}

export default AllStudents
