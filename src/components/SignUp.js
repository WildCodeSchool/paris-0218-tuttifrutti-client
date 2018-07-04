import React from 'react'
import axios from 'axios'
import HeaderSite from '../containers/HeaderSite.js'
import Button from './Button.js'
import PageTitle from './PageTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'
import Fields from '../fields/fields.json'

class SignUp extends React.Component {
  state = {
    lawyer: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      cabinet: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      toque: '',
      field: ''
    },
    fields: Fields.mainFields,
    displayForm: 'block',
    displayMessage: 'none'
  }

  UpdateField = event => { this.setState({ lawyer: {...this.state.lawyer, [event.target.name]: event.target.value} }) }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')

    const user = this.state.lawyer

    console.log(user)

    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value

    if (password === passwordConfirm) {
      axios.post(`http://localhost:3030/reg`, { user })
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
      this.setState({ displayForm: 'none', displayMessage: 'block' })
    } else {
      console.log('Les mots de passe ne sont pas identiques.')
    }
  }

  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token !== null) { window.location.replace('/profile') }
  }

  render () {
    const eachField = field => {
      return (
        <option value={field}>{field}</option>
      )
    }

    const showEachField =
    this.state.fields.map(field => eachField(field))

    return (
      <div>
        <HeaderSite redirect='/'/>
        <div className='signup-content'>
          <div>
            <div className='title-signup'>
              <PageTitle espace='Espace avocat' title='Inscription' />
            </div>
            <div style={{ display: this.state.displayForm }}>
              <div className='form-signup-container'>
                <form className="form-signup" onSubmit={this.HandleSubmit}>
                  <div className='form-div'>
                    <input className='form-input-signup' type="text" name="firstName" placeholder="Prénom" id="firstName" onChange={this.UpdateField} />
                    <input className='form-input-signup' type="text" name="lastName" placeholder="Nom" id="lastName" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="email" name="email" placeholder="Email" id="email" onChange={this.UpdateField} />
                    <input className='form-input-signup' type="text" name="phone" placeholder="Téléphone" id="phone" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="text" name="cabinet" placeholder="Nom du cabinet (facultatif)" id="cabinet" onChange={this.UpdateField} />
                    <input className='form-input-signup' type="text" name="toque" placeholder="N° de toque (facultatif)" id="toque" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="text" name="address" placeholder="Adresse" id="address" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="text" name="zipCode" placeholder="Code postal" id="zipCode" onChange={this.UpdateField} />
                    <input className='form-input-signup' type="text" name="city" placeholder="Ville" id="city" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <select className='form-select-signup' name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} >
                      <option value="" disabled selected>Sélectionnez votre domaine</option>
                      {showEachField}
                    </select>
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup'type="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} />
                    <input className='form-input-signup' type="password" name="passwordConfirm" placeholder="Confimer le mot de passe" id="passwordConfirm" />
                  </div>
                  <Button>S'inscrire</Button>
                </form>
              </div>
              <div className='link-signup-connect'><LinkSignUpConnect text1='Déjà inscrit ?' text2='Connectez-vous' linkRoute='/login' />
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
