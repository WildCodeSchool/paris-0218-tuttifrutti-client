import React from 'react'
import axios from 'axios'
import Button from './Button.js'
import HeaderSite from '../containers/HeaderSite.js'
import PageTitle from './PageTitle.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'
import Fields from '../fields/fields.json'

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
      active: false
    },
    fields: Fields.mainFields,
    displayForm: 'block',
    displayMessage: 'none'
  }

  UpdateField = event => { this.setState({ student: { ...this.state.student, [event.target.name]: event.target.value } }) }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')

    const user = this.state.student

    console.log(user)

    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value

    if (password === passwordConfirm) {
      axios.post(`http://localhost:3030/regstudent`, { user })
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
      this.setState({ displayForm: 'none', displayMessage: 'block' })
    } else {
      console.log('Les mots de passe ne sont pas identiques.')
    }
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
        <HeaderSite redirect='/signupstudent'/>
        <div className='signup-content'>
          <div>
            <div className='title-signup'>
              <PageTitle espace='Espace étudiant' title='Inscription' />
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
                    <select className='form-select-signup' name="levelStudy" placeholder="Niveau d'études" id="levelStudy" onChange={this.UpdateField} >
                      <option value="" disabled selected>Sélectionnez votre niveau d'études</option>
                      <option>Master 1</option>
                      <option>Master 2</option>
                      <option>Ms/LLM</option>
                      <option>Elève avocat</option>
                    </select>
                  </div>
                  <div className='form-div'>
                    <select className='form-select-signup' name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} >
                      <option value="" disabled selected>Sélectionnez votre domaine</option>
                      {showEachField}
                    </select>
                  </div>
                  <div className='form-div'>
                    <input className='form-input-signup' type="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} />
                    <input className='form-input-signup' type="password" name="passwordConfirm" placeholder="Confimer le mot de passe" id="passwordConfirm" />
                  </div>
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
