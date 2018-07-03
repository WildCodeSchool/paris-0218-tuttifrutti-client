import React from 'react'
import { userInfo } from '../User.js'
import axios from 'axios'
import Button from './Button.js'
import './style/Parameters.css'
import Fields from '../fields/fields.json'

class Parameters extends React.Component {
  state = {
    lawyer: {},
    fields: Fields.mainFields,
    displayInfo: 'block',
    displayForm: 'none'
  }

  componentDidMount () {
    console.log(this.state.fields)
    userInfo().then(res =>
      this.setState({
        lawyer: {
          id: res._id,
          email: res.email,
          firstName: res.firstName,
          lastName: res.lastName,
          cabinet: res.cabinet,
          phone: res.phone,
          address: res.address,
          city: res.city,
          zipCode: res.zipCode,
          toque: res.toque,
          field: res.field
        }
      }))
  }

  UpdateField = event => { this.setState({ lawyer: {...this.state.lawyer, [event.target.name]: event.target.value} }) }

  showUpdateForm = () => {
    this.setState({ displayInfo: 'none', displayForm: 'block' })
    console.log('youhou!!')
  }

  hideUpdateForm = () => {
    this.setState({ displayInfo: 'block', displayForm: 'none' })
    console.log('youhouououo!!!!')
  }

  HandleSubmit = event => {
    event.preventDefault()

    const user = this.state.lawyer

    console.log(user)

    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    if(password === passwordConfirm)
    {
      axios.put(`http://localhost:3030/infolawyer`, { user })
      .then(res => {
        console.log('ok')
      })

      this.hideUpdateForm()
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
        <div className='parameters-content'>
          <div>
            <div>
              <h1 className='title-parameters'>Paramètres du compte</h1>
            </div>
            <div className="parameters-profile" style={{ display: this.state.displayInfo }}>
              <div>
                <h2>Identifiants</h2>
                <p className="parameters-p">Email&nbsp;: {this.state.lawyer.email}</p>
                <p className="parameters-p">Mot de passe&nbsp;: ******</p>
              </div>
              <div>
                <h2>Informations personnelles</h2>
                <p className="parameters-p">Prénom&nbsp;: {this.state.lawyer.firstName}</p>
                <p className="parameters-p">Nom&nbsp;: {this.state.lawyer.lastName}</p>
                <p className="parameters-p">Cabinet&nbsp;: {this.state.lawyer.cabinet}</p>
                <p className="parameters-p">Numéro de téléphone&nbsp;: {this.state.lawyer.phone}</p>
                <p className="parameters-p">Adresse&nbsp;: {this.state.lawyer.address}</p>
                <p className="parameters-p">Ville&nbsp;: {this.state.lawyer.city}</p>
                <p className="parameters-p">Code Postal&nbsp;: {this.state.lawyer.zipCode}</p>
                <p className="parameters-p">Numéro de toque&nbsp;: {this.state.lawyer.toque}</p>
                <p className="parameters-p">Spécialité en droit&nbsp;: {this.state.lawyer.field}</p>
              </div>
              <div onClick={this.showUpdateForm}>
                <Button>Modifier</Button>
              </div>
            </div>
            <div style={{ display: this.state.displayForm }}>
              <div className='form-parameters-container'>
                <form className="form-parameters" onSubmit={this.HandleSubmit}>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="firstName" value={this.state.lawyer.firstName || ''} placeholder={this.state.lawyer.firstName} id="firstName" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="lastName" value={this.state.lawyer.lastName || ''} placeholder={this.state.lawyer.lastName} id="lastName" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="email" name="email" value={this.state.lawyer.email || ''} placeholder={this.state.lawyer.email} id="email" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="phone" value={this.state.lawyer.phone || ''} placeholder={this.state.lawyer.phone} id="phone" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="cabinet" value={this.state.lawyer.cabinet || ''} placeholder={this.state.lawyer.cabinet} id="cabinet" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="toque" value={this.state.lawyer.toque || ''} placeholder={this.state.lawyer.toque} id="toque" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="address" value={this.state.lawyer.address || ''} placeholder={this.state.lawyer.address} id="address" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="text" name="zipCode" value={this.state.lawyer.zipCode || ''} placeholder={this.state.lawyer.zipCode} id="zipCode" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="text" name="city" value={this.state.lawyer.city || ''} placeholder={this.state.lawyer.city} id="city" onChange={this.UpdateField} />
                  </div>
                  <div className='form-div'>
                    <select className='form-select-parameters' name="field" value={this.state.lawyer.field || ''} placeholder={this.state.lawyer.field} id="field" onChange={this.UpdateField} >
                      <option value={this.state.lawyer.field} disabled>{this.state.lawyer.field}</option>
                      {showEachField}
                    </select>
                  </div>
                  <div className='form-div'>
                    <input className='form-input-parameters' type="password" name="password" placeholder='Nouveau mot de passe' id="password" onChange={this.UpdateField} />
                    <input className='form-input-parameters' type="password" name="passwordConfirm" placeholder="Confirmez le nouveau mot de passe" id="passwordConfirm" />
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
