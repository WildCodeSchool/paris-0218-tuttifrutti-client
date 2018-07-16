import React from 'react'
import axios from 'axios'
import './style/AllLawyers.css'

class AllLawyers extends React.Component {
	state = {
		allUsers: []
	}

	componentWillMount() {

		axios
			.get(`http://localhost:3030/alllawyers`)
			.then((res) => {
				console.log('blabla')
				this.setState({ allUsers: res.data })
				console.log(this.state)
			})
			.catch((error) => {
				console.log(error);
			})
	}

	render() {

		const EachUser = (lawyer, key) => {

			return (
				<div key={key} className='each-lawyer-container'>
					<div>
						<p>
							{lawyer.cabinet}
							<br />
							{lawyer.field}
						</p>
						<p>
							{lawyer.firstName} {lawyer.lastName}
							<br />
							{lawyer.email}
							<br />
							{lawyer.phone}
						</p>
						<p>
							{lawyer.address}
							<br />
							{lawyer.zipCode} {lawyer.city}
						</p>
						<p>
							{lawyer.activated === true ? "Email vérifié" : "Email non vérifié"}
						</p>
					</div>
				</div>
			)
		}

		const ShowEachUser = this
			.state
			.allUsers
			.map(EachUser)

		return (
			<div className='all-lawyers-container'>
				{ShowEachUser}
			</div>
		)
	}
}

export default AllLawyers
