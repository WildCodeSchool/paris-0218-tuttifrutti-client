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

    console.log(formData)

    axios.post('http://localhost:3030/upload', formData)
      .then(res => {console.log(res.data.result)
        // let message = ''
        if (res.data.result === 'fail'){

        this.setState({message: 'Envoie impossible fichier pdf, doc, docx, jpg ou jpeg uniquement et inférieur à 5 mo'})
        this.setState({selectedFile: ''})
        this.setState({fileUploaded: false})
        }


        // console.log(message)
        // return message
      })
      // .catch(err => {
      //   console.log(err)
      //   // if (err.code ==="fail"){
      //   //   console.log('yaaahouuuuuuuuuuu')
      //   //   return ("yolaaaaaa")
      //   // }
      //  })
    }

  render () {

    console.log('yolo', this.state.selectedFile)

    const uploadFile = this.state.selectedFile === ''
      ? <label for='file' className='formupload-label-file'>Choisir un fichier</label>
      : <span style={{display: this.state.fileUploaded === true ? 'none' : 'block'}}>{this.state.selectedFile.name}</span>

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
        <div style={{display: this.state.selectedFile !== '' ? 'block' : 'none'}}>{sendFile}</div>
        <div>{this.state.message}</div>
      </form>
    )
  }
}

export default FormUpload
