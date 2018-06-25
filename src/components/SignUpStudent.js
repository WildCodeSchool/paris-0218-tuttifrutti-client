import React from 'react'
import axios from 'axios'
import Button from './Button.js'
import StudentPageTitle from './StudentPageTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'

class SignUpStudent extends React.Component {
    state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
      levelStudy: '',
      field: '',
      active: false
    }

  UpdateField = event => { this.setState({[event.target.name]: event.target.value}) }

    HandleSubmit = event => {
      event.preventDefault()
      console.log('testest')

      const user = {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        levelStudy: this.state.levelStudy,
        field: this.state.field,
        active: false
      }
      console.log(user)

      axios.post(`http://localhost:3030/regstudent`, { user })
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
    }

    render () {
      return (
        <div>
          <div className='login-signup-content'>
            <div>
              <div className='title-component'>
                <StudentPageTitle title='Inscription'/>
              </div>
              <div className='form-login-signup'>
                <form className="form" onSubmit={this.HandleSubmit}>
                  <div>
                    <input type ="text" name="firstName" placeholder="Nom" id="firstName" onChange={this.UpdateField} />
                    <input type ="text" name="lastName" placeholder="Prénom" id="lastName" onChange={this.UpdateField} />
                  </div>
                  <div>
                    <input type="email" name="email" placeholder="Email" id="email" onChange={this.UpdateField} />
                    <input type ="text" name="phone" placeholder="Téléphone" id="phone" onChange={this.UpdateField} />
                  </div>
                  <div>
                    <select name="levelStudy" placeholder="Niveau d'études" id="levelStudy" onChange={this.UpdateField} >
                      <option value="" disabled selected>Niveau d'études</option>
                      <option value="1">Master1</option>
                      <option value="2">Master2</option>
                      <option value="3">Ms/LLM</option>
                      <option value="5">Elève avocat</option>
                    </select>
                  </div>
                  <div>
                    <select name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} >
                      <option value="" disabled selected>Domaine</option>
                      <option value="1">droit2</option>
                      <option value="2">droit3</option>
                      <option value="3">droit4</option>
                      <option value="5">droit5</option>
                    </select>
                  </div>
                  <div>
                    <input type ="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} />
                    <input type ="password" name="passwordComfirm" placeholder="Confimer le mot de passe" id="passwordComfirm" />
                  </div>
                  <Button>S'inscrire</Button>
                </form>
              </div>
              <div className='link-signup-connect'><LinkSignUpConnect text1='Déjà inscrit ?' text2='Connectez-vous' linkRoute='/login'/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )
    }
}

export default SignUpStudent
