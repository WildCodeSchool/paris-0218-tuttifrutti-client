import React from 'react'
import axios from 'axios'
// import Button from './Button.js'
import PageTitle from './PageTitle.js'
import './style/LoginSignUpForm.css'

class Parameters extends React.Component {
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
    field: ''
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

    axios.post(`http://localhost:3030/reg`, { user })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render () {
    return (
      <div>
        <div className='login-parameters-content'>
          <div>
            <div className='title-login-parameters'>
              <PageTitle title='Inscription' />
            </div>
            <div>
              <p>{this.state.email}</p>
              <p>{this.state.password}</p>
            </div>
            <div>
              <p>{this.state.firstName}</p>
              <p>{this.state.lastName}</p>
              <p>{this.state.cabinet}</p>
              <p>{this.state.phone}</p>
              <p>{this.state.address}</p>
              <p>{this.state.city}</p>
              <p>{this.state.zipCode}</p>
              <p>{this.state.toque}</p>
              <p>{this.state.field}</p>
            </div>
            {/* <div className='form-login-parameters-container'>
              <form className="form-login-parameters" onSubmit={this.HandleSubmit}>
                <div className='form-div'>
                  <input className='form-input-login-parameters' type="text" name="firstName" placeholder="Nom" id="firstName" onChange={this.UpdateField} />
                  <input className='form-input-login-parameters' type="text" name="lastName" placeholder="Prénom" id="lastName" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-login-parameters' type="email" name="email" placeholder="Email" id="email" onChange={this.UpdateField} />
                  <input className='form-input-login-parameters' type="text" name="phone" placeholder="Téléphone" id="phone" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-login-parameters' type="text" name="cabinet" placeholder="Nom du cabinet (facultatif)" id="cabinet" onChange={this.UpdateField} />
                  <input className='form-input-login-parameters' type="text" name="toque" placeholder="N° de toque (facultatif)" id="toque" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-login-parameters' type="text" name="address" placeholder="Adresse" id="address" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-login-parameters' type="text" name="zipCode" placeholder="Code postal" id="zipCode" onChange={this.UpdateField} />
                  <input className='form-input-login-parameters' type="text" name="city" placeholder="Ville" id="city" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <select className='form-select-login-parameters' name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} >
                    <option value="" disabled selected>Domaine</option>
                    <option value="1">droit2</option>
                    <option value="2">droit3</option>
                    <option value="3">droit4</option>
                    <option value="5">droit5</option>
                  </select>
                </div>
                <div className='form-div'>
                  <input className='form-input-login-parameters'type="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} />
                  <input className='form-input-login-parameters' type="password" name="passwordComfirm" placeholder="Confimer le mot de passe" id="passwordComfirm" />
                </div>
                <Button>S'inscrire</Button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Parameters
