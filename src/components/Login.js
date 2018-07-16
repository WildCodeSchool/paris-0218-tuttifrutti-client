import React from 'react'
import HeaderSite from '../containers/HeaderSite.js'
import Button from './Button.js'
import PageTitle from './PageTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import Footer from '../containers/Footer.js'
import './style/LoginForm.css'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  UpdateField = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  HandleSubmit = (event, req, res) => {
    event.preventDefault()
    const creds = {
      email: this.state.email,
      password: this.state.password
    }

    fetch(`http://localhost:3030/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      // credentials: 'include',
      body: JSON.stringify({ creds })
    })
      .then(response => {
				return response.json()
				.then(responseJson => {
					console.log(responseJson)
					localStorage.setItem('token', responseJson.token)
					return responseJson
				})
				.then(redirect => {
					console.log(redirect)
					if (localStorage.getItem('token') === 'undefined') {
						localStorage.removeItem('token')
						this.setState({error: redirect})
					} else {
						window.location.replace('/profile')
					}
				})
			})
  }

  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token !== null) { window.location.replace('/profile') }
  }

  render () {
    let notValid = ''
    if (this.state.error === 'not verified') {
      notValid = `Vous n'avez pas encore confirmé votre adresse email.`
    } else if (this.state.error === 'auth failed') {
      notValid = 'Votre identifiant est inconnu ou votre mot de passe est faux. Veuillez réessayer en corrigeant votre saisie.'
    } else {
      notValid = ''
    }

    return (
      <div>
        <HeaderSite redirect='/' />
        <div className='login-content'>
          <div>
            <div className='title-login'>
              <PageTitle espace='Espace avocat' title='Connexion' />
            </div>
            <div>
              <div className='form-login-container'>
                <form className="form-login" onSubmit={this.HandleSubmit}>
                  <input className='form-input-login' type="email" name="email" placeholder="Email" onChange={this.UpdateField} />
                  <input className='form-input-login' type="password" name="password" placeholder="Mot de passe" onChange={this.UpdateField} />
                  <div className='valid'><p>{notValid}</p></div>
                  <Button>Se connecter</Button>
                </form>
              </div>
            </div>
            <div className='link-signup-connect'>
              <LinkSignUpConnect text1='Pas encore inscrit ?' text2='Créez votre compte' linkRoute='/reg' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Login
