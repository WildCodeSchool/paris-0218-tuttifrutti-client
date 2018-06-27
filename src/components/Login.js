import React from 'react'
import HeaderSite from '../containers/HeaderSite.js'
import Button from './Button.js'
import PageTitle from './PageTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
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
    }).then(response => {
      response.json()
        .then(responseJson => {
          localStorage.setItem('token', responseJson.token)
        })
    })
  }

  componentDidMount() {
    fetch('http://localhost:3030/')
  }

  render() {
    return (
      <div>
        <HeaderSite redirect='/' />
        <div className='login-signup-content'>
          <div>
            <div className='title-login-signup'>
              <PageTitle title='Connexion' />
            </div>
            <div>
              <div className='form-login-signup-cotainer'>
                <form className="form-login-signup" onSubmit={this.HandleSubmit}>
                  <input className='form-input-login-signup' type="email" name="email" placeholder="Email" onChange={this.UpdateField} />
                  <input className='form-input-login-signup' type="password" name="password" placeholder="Mot de passe" onChange={this.UpdateField} />
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
