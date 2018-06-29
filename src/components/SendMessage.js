import React from 'react'
import { userInfo } from '../User.js'
/* import axios from 'axios' */
import Button from './Button.js'
import './style/SendMessage.css'

class SendMessage extends React.Component {
  state = {
    objet: '',
    message: '',
    authorId: ''
  }

  componentDidMount () {
    userInfo().then(res =>
      this.setState({ authorId: res._id }))
  }

  UpdateField = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')
    /*
    const mission = this.state

    console.log(mission)

    axios.post(`http://localhost:3030/missions`, { mission })
      .then(res => {
        console.log(res)
        console.log(res.data)
      }) */
  }

  render () {
    return (
      <div>
        <div className='send-message-content'>
          <div>
            <h1 className="title-send-message">Envoyer un message</h1>
            <div className='form-send-message-container'>
              <form className="form-send-message" onSubmit={this.HandleSubmit}>
                <div className='form-div'>
                  <input className='form-input-send-message' type="text" name="objet" placeholder="Objet du message" id="objet" onChange={this.UpdateField} />
                </div>
                <div className='form-div'>
                  <textarea className='form-textarea-send-message' name="message" placeholder="Message" id="message" onChange={this.UpdateField} />
                </div>
                <Button>Envoyer</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SendMessage
