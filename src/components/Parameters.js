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
    displayInfo: 'block',
    displayForm: 'none'
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

  showUpdateForm = () => {
    this.setState({ displayInfo: 'none', displayForm: 'block' })
    console.log('youhou!!')
  }

  hideUpdateForm = () => {
    this.setState({ displayInfo: 'block', displayForm: 'none' })
    console.log('youhouououo!!!!')
  }

  render () {
    return (
      <div>
        <div className='parameters-content'>
          <div>
            <div>
              <h1 className='title-parameters'>Paramètres du compte</h1>
            </div>
            <div className="parameters-profile" style={{ display: this.state.displayInfo }}>
              <div>
                <h2>Identifiants</h2>
                <p className="parameters-p">Email&nbsp;: {this.state.email}</p>
                <p className="parameters-p">Mot de passe&nbsp;: {this.state.password}</p>
              </div>
              <div>
                <h2>Informations personnelles</h2>
                <p className="parameters-p">Prénom&nbsp;: {this.state.firstName}</p>
                <p className="parameters-p">Nom&nbsp;: {this.state.lastName}</p>
                <p className="parameters-p">Cabinet&nbsp;: {this.state.cabinet}</p>
                <p className="parameters-p">Numéro de téléphone&nbsp;: {this.state.phone}</p>
                <p className="parameters-p">Adresse&nbsp;: {this.state.address}</p>
                <p className="parameters-p">Ville&nbsp;: {this.state.city}</p>
                <p className="parameters-p">Code Postal&nbsp;: {this.state.zipCode}</p>
                <p className="parameters-p">Numéro de toque&nbsp;: {this.state.toque}</p>
                <p className="parameters-p">Spécialité en droit&nbsp;: {this.state.field}</p>
              </div>
              <div onClick={this.showUpdateForm}>
                <Button>Modifier</Button>
              </div>
            </div>
            <div style={{ display: this.state.displayForm }}>
              <div className='form-parameters-container'>
                <form className="form-parameters" onSubmit={this.HandleSubmit}>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="firstName" placeholder={this.state.firstName} id="firstName" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="lastName" placeholder={this.state.lastName} id="lastName" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="email" name="email" placeholder={this.state.email} id="email" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="phone" placeholder={this.state.phone} id="phone" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="cabinet" placeholder={this.state.cabinet} id="cabinet" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="toque" placeholder={this.state.toque} id="toque" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="address" placeholder={this.state.address} id="address" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="zipCode" placeholder={this.state.zipCode} id="zipCode" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="city" placeholder={this.state.city} id="city" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <select className='form-select-parameters' name="field" placeholder={this.state.field} id="field" onChange={this.UpdateField} >
                      <option value="" disabled selected>{this.state.field}</option>
                      <option value="1">droit2</option>
                      <option value="2">droit3</option>
                      <option value="3">droit4</option>
                      <option value="5">droit5</option>
                    </select>
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="password" name="password" placeholder={this.state.password} id="password" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="password" name="password" placeholder={this.state.password} id="passwordComfirm" />
                  </div>
                  <div>
                    <Button>Enregistrer</Button>
                  </div>
                </form>
              </div>
              <div onClick={this.hideUpdateForm}>
                <Button>Annuler</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Parameters
