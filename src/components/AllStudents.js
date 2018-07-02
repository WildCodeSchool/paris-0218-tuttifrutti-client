import React from 'react'
import './style/LoginSignUpForm.css'

class AllStudents extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    levelStudy: '',
    field: '',
    active: false
  }
  componentWillMount(){
    fetch(`http://localhost:3030/allstudents`).then(response => {
      console.log(response)})}
    render () {
    return (
      <div className='App'>
      <p>je suis la</p>
      </div>
    )
  }
}


export default AllStudents
