import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {userInfo} from '../User.js'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import '../containers/style/AllMissions.css'

class AllStudents extends React.Component {
    state = {
        allUser: [],
        email: ''
    }

    componentWillMount() {

        axios
            .get(`http://localhost:3030/allstudents`)
            .then((res) => {
                console.log('blabla')
                this.setState({allUser: res.data})
                console.log(this.state)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    Submit = (event, req, res) => {
        // event.prevntDefault() console.log(event)
        const user = {
            email: this.state.email
        }
        console.log(this.state)
        axios
            .post(`http://localhost:3030/allstudents`, {user})
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {

        const EachUser = (mission, key) => {

            return (
                <div key={key} className='each-mission-container'>
                    <div>
                        <p>Utilisateur:
                            <br/> {mission.email}</p>
                    </div>
                    <div>
                        <p>Nom: {mission.lastName}
                            <br/>
                            Prenom: {mission.firstName}</p>
                    </div>
                    <div>
                        <p>Email Confirmé:
                            <br/>
                            Statut Activation: {mission.approved}</p>
                    </div>
                    <button onClick={ () => this.Submit()}>Activé l'utilisateur</button>
                </div>
            )
        }

        const ShowEachUser = this
            .state
            .allUser
            .map(EachUser)

        return (
            <div className='all-missions-container'>
                {ShowEachUser}
            </div>
        )
    }
}

export default AllStudents
