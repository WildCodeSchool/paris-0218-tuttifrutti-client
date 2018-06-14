import React from 'react'
import axios from 'axios'
import Button from './Button.js'
import PageTitle from './PageTitle.js'
import Footer from '../containers/Footer.js'
import './style/LoginSignUpForm.css'

class NewMission extends React.Component {
  state = {
    name: '',
    field: '',
    deadline: '',
    price: '',
    description: '',
    author: 'test'
  }

  UpdateField = event => { this.setState({ [event.target.name]: event.target.value }) }

  HandleSubmit = event => {
    event.preventDefault();
    console.log('testest')

    const mission = this.state

    console.log(mission)

    axios.post(`http://localhost:3030/missions`, { mission })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <div className='login-signup-content'>
          <div>
            <div className='title-component'>
              <PageTitle title='Créer une nouvelle mission' />
            </div>
            <div className='form-login-signup'>
              <form className="form" onSubmit={this.HandleSubmit}>
                <div>
                  <input type="text" name="name" placeholder="Intitulé de la mission" id="name" onChange={this.UpdateField} />
                </div>
                <div>
                  <select name="field" placeholder="Domaine" id="field" onChange={this.UpdateField} >
                    <option value="" disabled selected>Domaine</option>
                    <option>droit2</option>
                    <option>droit3</option>
                    <option>droit4</option>
                    <option>droit5</option>
                  </select>
                </div>
                <div>
                  <input type="text" name="deadline" placeholder="Deadline" id="deadline" onChange={this.UpdateField} />
                  <input type="text" name="price" placeholder="Rémunération" id="price" onChange={this.UpdateField} />
                </div>
                <div>
                  <input type="text" name="description" placeholder="Description de la mission" id="description" onChange={this.UpdateField} />
                </div>
                <Button>Valider</Button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}

export default NewMission
