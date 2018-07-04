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
      fileUploaded: false,
      message: ''
    }
  }

  resetSelectedFile = () => {
    this.setState({selectedFile: '', fileUploaded: false, description: '', message: ''})
    document.getElementById('file').value = ''
    console.log('coucou', this.state)
  }
  onChange = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0], message: '' })
        break
      default:
        this.setState({ [e.target.name]: e.target.value, message: '' })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { description, selectedFile } = this.state
    let formData = new FormData()

    formData.append('description', description)
    formData.append('selectedFile', selectedFile)

    console.log(formData)
    this.setState({ uploading: true })

    axios.post('http://localhost:3030/upload', formData)
      .then(res => {
        this.setState({ uploading: false })

        console.log(res.data.result)
        // let message = ''
        if (res.data.result === 'fail') {
          this.resetSelectedFile()
          this.setState({
            message: (
              <div>
                Uniquement .pdf, .doc/docx, .jpg/jpeg
                <br /> <b>{'Taille max<5mo'}</b>
              </div>
            ),
            selectedFile: '',
            fileUploaded: false
          })
        } else {
          this.setState({ fileUploaded: true })
        }
      }).catch(err => {
        this.resetSelectedFile()
        this.setState({
          message: (
            <div>
              {err.response.data.split('body')[1].split('<br> &nbsp; ')[0].slice(7)}
              <br /> {' ou Taille max<5mo'}
            </div>
          ),
          selectedFile: '',
          uploading: false,
          fileUploaded: false
        })
      })
  }

  render () {
    console.log('yolo', this.state.selectedFile)

    const uploadFile = this.state.selectedFile === ''
      ? <label for='file' className='formupload-label-file'>Choisir un fichier</label>
      : <span style={{display: this.state.fileUploaded === true ? 'none' : 'block'}}>{this.state.selectedFile.name}<button onClick={() => this.resetSelectedFile()}>X</button></span>

    const sendFile = (this.state.fileUploaded === false
      ? <Button>Envoyer le document</Button>
      : <span>Fichier Envoyé</span>
    )

    return (
      <form onSubmit={this.onSubmit}>
        {uploadFile}
        {this.state.uploading ? 'uploading....' : ''}
        <input id='file' className='formupload-input-file'
          type="file"
          name="selectedFile"
          onChange={this.onChange}
        />
        <div style={{display: this.state.selectedFile !== '' ? 'block' : 'none'}}>{sendFile}</div>
        <div>{this.state.message}</div>

      </form>
    )
  }
}

export default FormUpload
