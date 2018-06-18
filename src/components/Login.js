import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Button from './Button.js'
import PageTitle from './PageTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import HomeLawyer from '../containers/HomeLawyer.js'
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
        body: JSON.stringify({creds})
      }).then(response => {
        response.json()
          .then(responseJson => {
            localStorage.setItem('token', responseJson.token)
          })
      })
    }

    componentDidMount () {
      fetch('http://localhost:3030/')
    }

    render () {
      return (
          <div>
            <div className='login-signup-content'>
              <div>
                <div className='title-component'>
                  <PageTitle title='Connexion' />
                </div>
                <div>
                  <div className='form-login-signup'>
                    <form className="form" onSubmit={this.HandleSubmit}>
                      <input type="email" name="email" placeholder="Email" onChange={this.UpdateField}/>
                      <input type="password" name="password" placeholder="Mot de passe" onChange={this.UpdateField}/>
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
