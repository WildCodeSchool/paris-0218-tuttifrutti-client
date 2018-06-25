import React from 'react'
import axios from 'axios'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import UserTitle from './UserTitle.js';
import UserId from './UserId.js';
// import './style/allUsers.css'

class UserMap extends React.Component {
  state = {
    allUsers: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3030/users`)
      .then((res) => {
        this.setState({ allUsers: res.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    const eachUser = students => {
      return (
        <div className='each-mission-container'>
          <UserTitle text={students.email} />
          <UserId text={students._id} />
            <Button>Approuver</Button>
     
        </div>
      )
    }

    const showEachUser = this.state.allUsers.map(students => eachUser(students))

    return (
      <div className='all-missions-container'>
        {showEachUser}
      </div>
    )
  }
}

export default UserMap
