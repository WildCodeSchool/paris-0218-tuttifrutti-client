import React from 'react'
import axios from 'axios'
import HeaderSite from '../containers/HeaderSite.js'
import Button from './Button.js'
import PageTitle from './PageTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'
import { signUpAdmin } from '../api.js';

class SignUp extends React.Component {
  state = {
    admin: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      activated: false

    },
    displayForm: 'block',
    displayMessage: 'none',
    hasErrorNotIdentic: false,
    hasErrorTooShort: false
  }

  UpdateField = event => { this.setState({ admin: { ...this.state.admin, [event.target.name]: event.target.value } }) }

  HandleSubmit = event => {
    event.preventDefault()

    const user = this.state.admin

    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value

    if (password.length < 6) {
      this.setState({ hasErrorNotIdentic: false, hasErrorTooShort: true })
    } else if (password !== passwordConfirm) {
      this.setState({ hasErrorNotIdentic: true, hasErrorTooShort: false })
    } else {
			signUpAdmin(user)
      // axios.post(`http://localhost:3030/signupadmin`, { user })
      //   .then(res => {
      //     console.log(res)
      //     console.log(res.data)
      //   })
      this.setState({ displayForm: 'none', displayMessage: 'block' })
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token')
    if (token !== null) { window.location.replace('/admin') }
  }

  render() {
    let notIdentic = ''
    if (this.state.hasErrorNotIdentic === true) {
      notIdentic = `Attention, les mots de passe ne sont pas identiques.`
    }

    let tooShort = ''
    if (this.state.hasErrorTooShort === true) {
      tooShort = `Attention, le mot de passe doit contenir au moins 6 caractères.`
    }

    return (
      <div>
        <HeaderSite redirect='/signupadmin' />
        <div className='signup-content'>
          <div>
            <div className='title-signup'>
              <PageTitle espace='Espace Admin' title='Inscription' />
            </div>
            <div style={{ display: this.state.displayForm }}>
              <div className='form-signup-container'>
                <form className="form-signup" onSubmit={this.HandleSubmit}>
                  <div className='form-div'>
                    <input className='form-input-signup' type="text" name="firstName" placeholder="Prénom" id="firstName" onChange={this.UpdateField} required/>
                    <input className='form-input-signup' type="text" name="lastName" placeholder="Nom" id="lastName" onChange={this.UpdateField} required/>
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="email" name="email" placeholder="Email" id="email" onChange={this.UpdateField} required/>
                  </div>
                  <div className='form-div'>
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} required/>
                    <input className='form-input-signup' type="password" name="passwordConfirm" placeholder="Confimer le mot de passe" id="passwordConfirm" required/>
                  </div>
                  <div className='identic'><p>{notIdentic}</p></div>
                  <div className='identic'><p>{tooShort}</p></div>
                  <Button>S'inscrire</Button>
                </form>
              </div>
              <div className='link-signup-connect'><LinkSignUpConnect text1='Déjà inscrit ?' text2='Connectez-vous' linkRoute='/loginadmin' />
              </div>
            </div>
            <div style={{ display: this.state.displayMessage }}>
              <p className='signup-message'>Votre inscription a bien été prise en compte,<br />vous recevrez la confirmation de votre demande sur votre boite mail. </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default SignUp
