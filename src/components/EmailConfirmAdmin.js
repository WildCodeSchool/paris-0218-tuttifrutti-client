import React, { Component } from 'react'
import HeaderSite from '../containers/HeaderSite.js'
import PageTitle from './PageTitle.js'
import axios from 'axios'
import Footer from '../containers/Footer.js'
import './style/LoginForm.css'

class EmailConfirm extends Component {

	state = {
		user: '',
		response: ''
	}

	componentWillMount() {
		const queryString = window.location.pathname.split(`/`)
		this.setState({ user: queryString[2] })
	}

	componentDidMount() {
		axios
			.get(`http://localhost:3030/confirmationadmin/${this.state.user}`)
			.then((response) => {
				console.log(response)
				this.setState({ response: response.data })
			})
	}

	submit = () => {
		window.location.replace('/loginadmin')
	}

	mailVerified = () => {
		return (
			<div>
				<p>
					Votre inscription a bien été validée.
						<br />
					Vous pouvez désormais accéder à votre compte.
					</p>
				<div className='form-login-container'>
					<button type="button" className='button' onClick={this.submit}>Se connecter</button>
				</div>
			</div>
		)
	}

	invalidUser = () => {
		return (
			<div>
				<p>Utilisateur introuvable.
					<br />
					Verifiez votre mail de confirmation.
				</p>
			</div>
		)
	}

	render() {
		return (
			<div>
				<HeaderSite redirect='/' />
				<div className='login-content'>
					<div>
						<div className='title-login'>
							<PageTitle espace='Bienvenue sur LITTA' />
						</div>
						{this.state.response === 'verified' ?
							this.mailVerified() : this.invalidUser()}
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default EmailConfirm
