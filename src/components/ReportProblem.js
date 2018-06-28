import React from 'react'
import { userInfo } from '../User.js'
import Button from './Button.js'
import './style/ReportProblem.css'

class ReportProblem extends React.Component {
  state = {
    problem: '',
    autre: '',
    author: '',
    authorId: '',
    display: 'none'
  }

  componentDidMount () {
    userInfo().then(res =>
      this.setState({ author: res.cabinet, authorId: res._id }))
  }

  UpdateField = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  HandleSubmit = event => {
    event.preventDefault()
    console.log('testest')

    //   const mission = this.state

    //   console.log(mission)

    //   axios.post(`http://localhost:3030/missions`, { mission })
    //     .then(res => {
    //       console.log(res)
    //       console.log(res.data)
    //     })
  }

  componentDidUpdate () {
    if (this.state.display !== 'block' && this.state.problem === 'Autre') {
      this.setState({display: 'block'})
    } else if (this.state.display === 'block' && this.state.problem !== 'Autre') {
      this.setState({display: 'none'})
    }
  }

  render () {
    return (
      <div>
        <div className='report-problem-content'>
          <h1 className='title-report-problem'>Nature du problème</h1>
          <div className='form-report-problem-container'>
            <form className='form-report-problem' onSubmit={this.HandleSubmit}>
              <div className='form-div'>
                <label>
                  <input className='form-radio-button-report-problem' name="problem" type="radio" value="La mission est incomplète" checked={this.state.problem === 'La mission est incomplète'} onChange={this.UpdateField} />
                    La mission est incomplète
                </label>
              </div>
              <div className='form-div'>
                <label>
                  <input className='form-radio-button-report-problem' name="problem" type="radio" value="La mission n'a pas été rendue dans les temps" checked={this.state.problem === 'La mission n\'a pas été rendue dans les temps'} onChange={this.UpdateField} />
                  La mission n'a pas été rendue dans les temps
                </label>
              </div>
              <div className='form-div'>
                <label>
                  <input className='form-radio-button-report-problem' name="problem" type="radio" value="Problème technique" checked={this.state.problem === 'Problème technique'} onChange={this.UpdateField} />
                  Problème technique
                </label>
              </div>
              <div className='form-div'>
                <label>
                  <input className='form-radio-button-report-problem' name="problem" type="radio" value="Autre" checked={this.state.problem === 'Autre'} onChange={this.UpdateField} />
                  Autre
                </label>
              </div>
              <div style={{display: this.state.display}}>
                <textarea className='form-textarea-report-problem' name="autre" placeholder="Si autre, précisez le problème." id="autre" onChange={this.UpdateField} />
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
