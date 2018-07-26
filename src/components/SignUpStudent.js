import React from 'react'
import axios from 'axios'
import Button from './Button.js'
import HeaderSite from '../containers/HeaderSite.js'
import PageTitle from './PageTitle.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'
import Fields from '../fields/fields.json'
import { signUpStudent } from '../api.js';

class SignUpStudent extends React.Component {
  state = {
    student: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
      levelStudy: '',
      field: '',
      activated: false,
      approved: false
    },
    fields: Fields.mainFields,
    displayForm: 'block',
    displayMessage: 'none',
    hasErrorNotIdentic: false,
    hasErrorTooShort: false
  }

  UpdateField = event => { this.setState({ student: { ...this.state.student, [event.target.name]: event.target.value } }) }

  HandleSubmit = event => {
    event.preventDefault()

    const user = this.state.student

    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value

    if (password.length < 6) {
      this.setState({ hasErrorNotIdentic: false, hasErrorTooShort: true })
    } else if (password !== passwordConfirm) {
      this.setState({ hasErrorNotIdentic: true, hasErrorTooShort: false })
    } else {
      // axios.post(`http://localhost:3030/regstudent`, { user })
      //   .then(res => {
      //     console.log(res)
      //     console.log(res.data)
			//   })
			signUpStudent(user)
      this.setState({ displayForm: 'none', displayMessage: 'block' })
    }
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

    const eachField = (field, index) => {
      return (
        <option key={index} value={field}>{field}</option>
      )
    }

    const showEachField =
      this.state.fields.map(eachField)

    return (
      <div>
        <HeaderSite redirect='/signupstudent' />
        <div className='signup-content'>
          <div>
            <div className='title-signup'>
              <PageTitle espace='Espace étudiant' title='Inscription' />
            </div>
            <div style={{ display: this.state.displayForm }}>
              <div className='form-signup-container'>
                <form className="form-signup" onSubmit={this.HandleSubmit}>
                  <div className='form-div'>
                    <input className='form-input-signup' type="text" name="firstName" placeholder="Prénom" id="firstName" onChange={this.UpdateField} required />
                    <input className='form-input-signup' type="text" name="lastName" placeholder="Nom" id="lastName" onChange={this.UpdateField} required />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="email" name="email" placeholder="Email" id="email" onChange={this.UpdateField}required />
                    <input className='form-input-signup' type="text" name="phone" placeholder="Téléphone" id="phone" onChange={this.UpdateField} required />
                  </div>
                  <div className='form-div'>
                    <select className='form-select-signup' name="levelStudy" placeholder="Niveau d'études" id="levelStudy" onChange={this.UpdateField} required>
                      <option value="" disabled selected>Sélectionnez votre niveau d'études</option>
                      <option>Master 1</option>
                      <option>Master 2</option>
                      <option>Ms/LLM</option>
                      <option>Elève avocat</option>
                    </select>
                  </div>
                  <div className='form-div'>
                    <select className='form-select-signup' name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} required>
                      <option value="" disabled selected>Sélectionnez votre domaine</option>
                      {showEachField}
                    </select>
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} required />
                    <input className='form-input-signup' type="password" name="passwordConfirm" placeholder="Confimer le mot de passe" id="passwordConfirm" required />
                  </div>
                  <div className='identic'><p>{notIdentic}</p></div>
                  <div className='identic'><p>{tooShort}</p></div>
                  <Button>S'inscrire</Button>
                </form>
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

export default SignUpStudent
