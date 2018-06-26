import React from 'react'
// import axios from 'axios'
import Button from './Button.js'
import './style/ReportProblem.css'

class ReportProblem extends React.Component {
  // state = {
  //   name: '',
  //   field: '',
  //   deadline: '',
  //   price: '',
  //   description: '',
  //   author: 'test',
  //   finished: false
  // }

  // UpdateField = event => {
  //   this.setState({ [event.target.name]: event.target.value }) }

  // HandleSubmit = event => {
  //   event.preventDefault()
  //   console.log('testest')

  //   const mission = this.state

  //   console.log(mission)

  //   axios.post(`http://localhost:3030/missions`, { mission })
  //     .then(res => {
  //       console.log(res)
  //       console.log(res.data)
  //     })
  // }

  render() {
    return (
      <div>
        <div className='report-problem-content'>
            <h1 className='title-report-problem'>Nature du problème</h1>
            <div className='form-report-problem-container'>
              <form className='form-report-problem' onSubmit={this.HandleSubmit}>
                <div className='form-div'>
                  <label>
                    <input className='form-radio-button-report-problem' type="radio" name="incomplete" id="incomplete" value="La mission est incomplète" onChange={this.UpdateField} checked={true} />
                    La mission est incomplète
                  </label>
                </div>
                <div className='form-div'>
                <label>
                  <input className='form-radio-button-report-problem' type="radio" name="pasRendu" id="pasRendu" value="La mission n'a pas été rendue dans les temps" onChange={this.UpdateField} />
                  La mission n'a pas été rendue dans les temps
                  </label>
                </div>
                <div className='form-div'>
                <label>
                  <input className='form-radio-button-report-problem' type="radio" name="problemeTechnique" id="problemeTechnique" value="Problème technique" onChange={this.UpdateField} />
                  Problème technique
                  </label>
                </div>
                <div>
                  <textarea className='form-textarea-report-problem'name="description" placeholder="Autre problème" id="description" onChange={this.UpdateField} />
                </div>
                <div className='form-button-report-problem'>
                  <Button>Envoyer</Button>
                </div>
              </form>
          </div>
        </div>
      </div >
    )
  }
}

export default ReportProblem
