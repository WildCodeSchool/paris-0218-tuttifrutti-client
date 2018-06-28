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
      password: '',
      hasError: false
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
        body: JSON.stringify({creds})
      }).then(response => {
        response.json()
          .then(responseJson => {
            localStorage.setItem('token', responseJson.token)
          }).then(redirect => {
            if (localStorage.getItem('token') === 'undefined') {this.setState({hasError: true})} 
            else {window.location.replace('/profile')}     
          })
      })




    render () {
      let notValid = ''
      if (this.state.hasError === true) { notValid = `Votre identifiant est inconnu ou votre mot de passe est faux. Veuillez réessayer en corrigeant votre saisie.` } else {notValid = ''}
  
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
                    <div className='valid'> {notValid} </div>
                    <Button>Se connecter</Button>
                  </form>
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
