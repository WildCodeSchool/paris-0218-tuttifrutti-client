import React, { Component } from 'react'
import axios from 'axios'
import Button from './Button.js'
import './style/FormUpload.css'
import { missionUploadFile, missionStockUploadedFilesName } from '../api.js'

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

    this.setState({ uploading: true })

		missionUploadFile(formData)
      .then(res => {
        this.setState({ uploading: false })

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
          async () => {
						const fileName = await this.state.fileSended
						const mission = await this.state.missionId
						missionStockUploadedFilesName(mission, fileName)
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
