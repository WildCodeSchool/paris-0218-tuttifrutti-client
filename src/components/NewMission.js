import React from 'react'
import { userInfo } from '../User.js'
import axios from 'axios'
import Button from './Button.js'
import './style/NewMission.css'
import Fields from '../fields/fields.json'
import subFields from '../fields/subFields.json'

class NewMission extends React.Component {
  state = {
    newmission: {
      name: '',
      field: '',
      subField: '',
      deadline: '',
      price: '',
      description: '',
      finished: false,
      author: ''
    },
    fields: Fields.mainFields,
    subFields: subFields
  }

  componentDidMount() {
    console.log(this.state.subFields)
    userInfo().then(res =>
      this.setState({ newmission: { ...this.state.newmission, author: res._id } }))
  }

  UpdateField = event => {
    this.setState({ newmission: { ...this.state.newmission, [event.target.name]: event.target.value } })
  }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')

    const mission = this.state.newmission

    console.log(mission)

    axios.post(`http://localhost:3030/missions`, { mission })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render() {

    // Fill select fields

    const showEachField =
      this.state.fields.map((field, index) => <option key={index} value={field}>{field}</option>)

    // Fill select subfiels

    const choosenField = this.state.newmission.field
    const subField = this.state.subFields[choosenField]
    let showEachSubField = []

    if (subField) {
      showEachSubField =
        subField.map((subfield, index) => <option key={index} value={subfield}>{subfield}</option>)
    }

    return (
      <div>
        <div className='new-mission-content'>
          <div>
            <h1 className="title-new-mission">Créer une nouvelle mission</h1>
            <div className='form-new-mission-container'>
              <form className="form-new-mission" onSubmit={this.HandleSubmit}>
                <div className='form-div'>
                  <input className='form-input-new-mission' type="text" name="name" placeholder="Intitulé de la mission" id="name" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <select className='form-select-new-mission ' name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} >
                    <option value="Sélectionnez votre domaine" disabled>Sélectionnez votre domaine</option>
                    {showEachField}
                  </select>
                </div>
                <div className='form-div'>
                  <select style={{display: this.state.newmission.field !== '' ? 'block' : 'none'}} className='form-select-new-mission ' name="subField" placeholder="Sous-domaine" id="subField" onChange={this.UpdateField} >
                    <option value="Sélectionnez votre sous-domaine" disabled>Sélectionnez votre sous-domaine</option>
                    {showEachSubField}
                  </select>
                </div>
                <div className='form-div'>
                  <input className='form-input-new-mission' type="text" name="deadline" placeholder="Deadline" id="deadline" onChange={this.UpdateField} />
                  <input className='form-input-new-mission' type="text" name="price" placeholder="Rémunération" id="price" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <textarea className='form-textarea-new-mission' name="description" placeholder="Description de la mission" id="description" onChange={this.UpdateField} />
                </div>
                <Button>Valider</Button>
              </form>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default NewMission
