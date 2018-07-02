import React from 'react'
import axios from 'axios'
import HeaderSite from '../containers/HeaderSite.js'
import Button from './Button.js'
import PageTitle from './PageTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'

class SignUp extends React.Component {
  state = {
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
    field: '',
    activated: false
  }

  UpdateField = event => { this.setState({ [event.target.name]: event.target.value }) }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')

    const user = this.state

    // const user = {
    //   email: this.state.email,
    //   password: this.state.password,
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   cabinet: this.state.cabinet,
    //   phone: this.state.phone,
    //   address: this.state.address,
    //   city: this.state.city,
    //   zipCode: this.state.zipCode,
    //   toque: this.state.toque,
    //   field: this.state.field,
    // };

    console.log(user)

    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    if(password === passwordConfirm)
    {
      axios.post(`http://localhost:3030/reg`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    } else {
      console.log('Les mots de passe ne sont pas identiques.')
    }
  }

  render () {
    return (
      <div>
        <HeaderSite redirect='/'/>
        <div className='signup-content'>
          <div>
            <div className='title-signup'>
              <PageTitle title='Inscription' />
            </div>
            <div className='form-signup-container'>
              <form className="form-signup" onSubmit={this.HandleSubmit}>
                <div className='form-div'>
                  <input className='form-input-signup' type="text" name="firstName" placeholder="Nom" id="firstName" onChange={this.UpdateField} />
                  <input className='form-input-signup' type="text" name="lastName" placeholder="Prénom" id="lastName" onChange={this.UpdateField} />
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
                    <option value="" disabled selected>Domaine</option>
                    <option value="1">droit2</option>
                    <option value="2">droit3</option>
                    <option value="3">droit4</option>
                    <option value="5">droit5</option>
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
        </div>
        <Footer />
      </div>
    )
  }
}

export default SignUp
