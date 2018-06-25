import React from 'react'
import axios from 'axios'
import ActivateButton from '../components/ActivateButton.js'
import UserTitle from './UserTitle.js';
import UserId from './UserId.js';
// import './style/allUsers.css'

class UserMap extends React.Component {
  state = {
    allUsers: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3030/users`)
      .then((res) => {
        this.setState({ allUsers: res.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  ActivateUser = (event) => {

  let user = event.email

  axios.post('http://localhost:3030/usermap', user
    )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    // Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options, callback)
    // <li key={i} onClick={this.handleClick.bind(this, i)} style={s}>

}

  render() {

    const eachUser = (students, key) => {
      return (
        <div key={key} className='each-mission-container'>
          <UserTitle ref={students._id} text={students.email} />
          <UserId text={students._id} />
        <button onClick={this.ActivateUser.bind(this, students)}>Approuver</button>
     
        </div>
      )
    }

    const showEachUser = this.state.allUsers.map((students, key) => eachUser(students, key))

    return (
      <div className='all-missions-container'>
        {showEachUser}
      </div>
    )
  }
}

export default UserMap
