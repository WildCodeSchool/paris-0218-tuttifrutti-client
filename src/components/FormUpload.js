import React, { Component } from 'react'
import axios from 'axios'
import Button from './Button.js'
import './style/FormUpload.css'

class FormUpload extends Component {
    state = {
      missionId: this.props.missionId,
      description: '',
      selectedFile: '',
      fileUploaded: false,
      message: '',
      fileSended: ''
    }

  resetSelectedFile = () => {
    this.setState({ selectedFile: '', fileUploaded: false, description: '', message: '' })
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
		console.log('blaaaa', this.state.missionId)
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
                .pdf, .doc/docx, .jpg/jpeg uniquement
                <br /> <b> {'/ max 5mo'}</b>
              </div>
            ),
            selectedFile: '',
            fileUploaded: false
          })
        } else {
          this.setState({
            fileUploaded: true,
            fileSended : this.state.selectedFile.name
          },
          () => {const fileName = this.state.fileSended
            axios.put(`http://localhost:3030${this.state.missionId}`, {fileName})
            .then(() => {
              window.location.reload()
            })

          }
      )
}
      }).catch(err => {
        this.resetSelectedFile()
        this.setState({
          message: (
            <div className='error-upload'>
              {err.response.data.split('body')[1].split('<br> &nbsp; ')[0].slice(7)}
              {/* <br />  */}
              {' / max 5mo'}
            </div>
          ),
          selectedFile: '',
          uploading: false,
          fileUploaded: false
        })
      })
  }

  render() {
    console.log('yolo', this.state.selectedFile, this.state.sendOtherFile)
    console.log('medhiteryiaki', this.state.missionId)

    const uploadFile = this.state.selectedFile === ''
      ? <label for='file'><div className='formupload-label-file'>Ajouter un fichier</div></label>
      : <span style={{ display: this.state.fileUploaded === true ? 'none' : 'block', textAlign: 'center' }}>{this.state.selectedFile.name} <span className='delete-file' onClick={() => this.resetSelectedFile()}> x</span></span>

    const sendFile = (this.state.fileUploaded === false
      ? <Button>Envoyer le document</Button>
      : <div> <span>Le fichier {this.state.selectedFile.name} a bien été envoyé</span>
        <div onClick={() => (this.resetSelectedFile())}><Button>Envoyer un autre document</Button></div></div>
    )

    return (
      <center><form onSubmit={this.onSubmit}>
        {uploadFile}
        {this.state.uploading ? 'Envoi en cours...' : ''}
        <input id='file' className='formupload-input-file'
          type="file"
          name="selectedFile"
          onChange={this.onChange}
        />
        <div style={{ display: this.state.selectedFile !== '' ? 'block' : 'none' }}>{sendFile}</div>
        <div>{this.state.message}</div>

      </form></center>
    )

  }
}

export default FormUpload
