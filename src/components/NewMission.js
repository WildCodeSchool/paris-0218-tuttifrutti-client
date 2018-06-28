import React from 'react'
import { userInfo } from '../User.js'
import axios from 'axios'
import Button from './Button.js'
import './style/NewMission.css'

class NewMission extends React.Component {
  state = {
    name: '',
    field: '',
    deadline: '',
    price: '',
    description: '',
    author: '',
    finished: false
  }

  componentDidMount () {
    userInfo().then(res =>
      this.setState({ author: res._id }))
  }

  UpdateField = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')

    const mission = this.state

    console.log(mission)

    axios.post(`http://localhost:3030/missions`, { mission })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  render () {
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
                    <option value="" disabled selected>Sélectionnez votre domaine</option>
                    <option>droit2</option>
                    <option>droit3</option>
                    <option>droit4</option>
                    <option>droit5</option>
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
