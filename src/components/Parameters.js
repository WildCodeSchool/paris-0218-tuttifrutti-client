import React from 'react'
import { userInfo } from '../User.js'
// import axios from 'axios'
import Button from './Button.js'
import './style/Parameters.css'

class Parameters extends React.Component {
  state = {
    // email: '',
    // password: '',
    // firstName: '',
    // lastName: '',
    // cabinet: '',
    // phone: '',
    // address: '',
    // city: '',
    // zipCode: '',
    // toque: '',
    // field: ''
  }

  componentDidMount () {
    userInfo().then(res =>
      this.setState({
        email: res.email,
        password: res.password,
        firstName: res.firstName,
        lastName: res.lastName,
        cabinet: res.cabinet,
        phone: res.phone,
        address: res.address,
        city: res.city,
        zipCode: res.zipCode,
        toque: res.toque,
        field: res.field
      }))
  }

  UpdateField = event => { this.setState({ [event.target.name]: event.target.value }) }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')

    // const user = this.state

    // console.log(user)

    // axios.post(`http://localhost:3030/infolawyer`)
    //   .then(res => {
    //     console.log(res)
    //     console.log(res.data)
    //   })
  }

  render () {
    return (
      <div>
        <div className='parameters-content'>
          <div>
            <div>
              <h1 className='title-parameters'>Paramètres du compte</h1>
            </div>
            <div>
              <p>Email&nbsp;: {this.state.email}</p>
              <p>Mot de passe&nbsp;: {this.state.password}</p>
            </div>
            <div>
              <p>Prénom&nbsp;: {this.state.firstName}</p>
              <p>Nom&nbsp;: {this.state.lastName}</p>
              <p>Cabinet&nbsp;: {this.state.cabinet}</p>
              <p>Numéro de téléphone&nbsp;: {this.state.phone}</p>
              <p>Adresse&nbsp;: {this.state.address}</p>
              <p>Ville&nbsp;: {this.state.city}</p>
              <p>Code Postal&nbsp;: {this.state.zipCode}</p>
              <p>Numéro de toque&nbsp;: {this.state.toque}</p>
              <p>Spécialité en droit&nbsp;: {this.state.field}</p>
            </div>
            {/* <div className='form-parameters-container'>
              <form className="form-parameters" onSubmit={this.HandleSubmit}>
                <div className='form-div'>
                  <input className='form-input-parameters' type="text" name="firstName" placeholder="Nom" id="firstName" onChange={this.UpdateField} />
                  <input className='form-input-parameters' type="text" name="lastName" placeholder="Prénom" id="lastName" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-parameters' type="email" name="email" placeholder="Email" id="email" onChange={this.UpdateField} />
                  <input className='form-input-parameters' type="text" name="phone" placeholder="Téléphone" id="phone" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-parameters' type="text" name="cabinet" placeholder="Nom du cabinet (facultatif)" id="cabinet" onChange={this.UpdateField} />
                  <input className='form-input-parameters' type="text" name="toque" placeholder="N° de toque (facultatif)" id="toque" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-parameters' type="text" name="address" placeholder="Adresse" id="address" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <input className='form-input-parameters' type="text" name="zipCode" placeholder="Code postal" id="zipCode" onChange={this.UpdateField} />
                  <input className='form-input-parameters' type="text" name="city" placeholder="Ville" id="city" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <select className='form-select-parameters' name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} >
                    <option value="" disabled selected>Domaine</option>
                    <option value="1">droit2</option>
                    <option value="2">droit3</option>
                    <option value="3">droit4</option>
                    <option value="5">droit5</option>
                  </select>
                </div>
                <div className='form-div'>
                  <input className='form-input-parameters'type="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} />
                  <input className='form-input-parameters' type="password" name="passwordComfirm" placeholder="Confimer le mot de passe" id="passwordComfirm" />
                </div>
                <Button>S'inscrire</Button>
              </form>
            </div> */}
            <Button>Modifier</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Parameters
