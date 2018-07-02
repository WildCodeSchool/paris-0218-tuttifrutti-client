import React, { Component } from 'react'
import axios from 'axios'
import Button from './Button.js'
import './style/FormUpload.css'

class FormUpload extends Component {
  constructor () {
    super()
    this.state = {
      description: '',
      selectedFile: '',
      fileUploaded: false
    }
  }
  onChange = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] })
        break
      default:
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { description, selectedFile } = this.state
    let formData = new FormData()
    this.setState({ fileUploaded: true })

    formData.append('description', description)
    formData.append('selectedFile', selectedFile)

    axios.post('http://localhost:3030/upload', formData)
      .then((result) => {
      // access results...
      })
  }

  render () {
    console.log('yolo', this.state.selectedFile)

    const uploadFile = this.state.selectedFile === ''
      ? <label for='file' className='formupload-label-file'>Choisir un fichier</label>
      : this.state.selectedFile.name

    const sendFile = (this.state.fileUploaded === false
      ? <Button>Envoyer le document</Button>
      : <span>Fichier Envoyé</span>
    )
    return (
      <form onSubmit={this.onSubmit}>
        {uploadFile}

        <input id='file' className='formupload-input-file'
          type="file"
          name="selectedFile"
          onChange={this.onChange}
        />
        {sendFile}
      </form>
    )
  }
}

export default FormUpload
