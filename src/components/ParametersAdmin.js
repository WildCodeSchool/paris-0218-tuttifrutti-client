import React from 'react'
import { userInfoAdmin, updateInfoAdmin } from '../api.js'
import Button from './Button.js'
import './style/Parameters.css'

class ParametersAdmin extends React.Component {
	state = {
		admin: {},
		displayInfo: 'block',
		displayForm: 'none',
		confirmUpdate: false
	}

	componentDidMount() {
		userInfoAdmin().then(res =>
			this.setState({
				admin: {
					id: res._id,
					email: res.email,
					firstName: res.firstName,
					lastName: res.lastName
				}
			}))
	}

	UpdateField = event => { this.setState({ admin: { ...this.state.admin, [event.target.name]: event.target.value } }) }

	showUpdateForm = () => {

		this.setState({ displayInfo: 'none', displayForm: 'block', confirmUpdate: this.state.confirmUpdate ? false : false })
	}

	hideUpdateForm = () => {
		this.setState({ displayInfo: 'block', displayForm: 'none' })
	}

	updateOk = () => <div>Vos informations ont bien été mise à jour.</div>

	HandleSubmit = event => {
		event.preventDefault()

		const user = this.state.admin

		const password = document.getElementById("password").value;
		const passwordConfirm = document.getElementById("passwordConfirm").value;

		if (password === passwordConfirm) {
			updateInfoAdmin(user)
			this.setState({ confirmUpdate: true })
			this.props.update(this.state.admin.firstName, this.state.admin.lastName)
			this.hideUpdateForm()
		} else {
			console.log('Les mots de passe ne sont pas identiques.')
		}
	}

	render() {
		return (
			<div>
				<div className='parameters-content'>
					<div>
						<div>
							<h1 className='title-parameters'>Paramètres du compte</h1>
						</div>
						<div className="parameters-profile" style={{ display: this.state.displayInfo }}>
							<div>
								<p>{this.state.confirmUpdate ? this.updateOk() : undefined}</p>
							</div>
							<div>
								<h2>Identifiants</h2>
								<p className="parameters-p">Email&nbsp;: {this.state.admin.email}</p>
								<p className="parameters-p">Mot de passe&nbsp;: ******</p>
							</div>
							<div>
								<h2>Informations personnelles</h2>
								<p className="parameters-p">Prénom&nbsp;: {this.state.admin.firstName}</p>
								<p className="parameters-p">Nom&nbsp;: {this.state.admin.lastName}</p>
							</div>
							<div onClick={this.showUpdateForm}>
								<Button>Modifier</Button>
							</div>
						</div>
						<div style={{ display: this.state.displayForm }}>
							<div className='form-parameters-container'>
								<form className="form-parameters" onSubmit={this.HandleSubmit}>
									<div className='form-div'>
										<input className='form-input-parameters' type="text" name="firstName" value={this.state.admin.firstName || ''} placeholder={this.state.admin.firstName} id="firstName" onChange={this.UpdateField} />
										<input className='form-input-parameters' type="text" name="lastName" value={this.state.admin.lastName || ''} placeholder={this.state.admin.lastName} id="lastName" onChange={this.UpdateField} />
									</div>
									<div className='form-div'>
										<input className='form-input-parameters' type="email" name="email" value={this.state.admin.email || ''} placeholder={this.state.admin.email} id="email" onChange={this.UpdateField} />
									</div>

									<div className='form-div'>
										<input className='form-input-parameters' type="password" name="password" placeholder='Nouveau mot de passe' id="password" onChange={this.UpdateField} />
										<input className='form-input-parameters' type="password" name="passwordConfirm" placeholder="Confirmez le nouveau mot de passe" id="passwordConfirm" />
									</div>
									<div>
										<Button>Enregistrer</Button>
									</div>
								</form>
							</div>
							<div onClick={this.hideUpdateForm}>
								<Button>Annuler</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ParametersAdmin
