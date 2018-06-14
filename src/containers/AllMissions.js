import React from 'react'
import axios from 'axios'
import Button from '../components/Button.js'
import MissionTitle from '../components/MissionTitle.js'
import MissionId from '../components/MissionId.js'
import MissionField from '../components/MissionField.js'
import MissionDeadline from '../components/MissionDeadline.js'
import './style/AllMissions.css'

class AllMissions extends React.Component {
    state = []

    componentDidMount() {
        axios.get(`http://localhost:3030/missions`)
            .then(console.log('ok'))
            .then((res) => {
                this.setState({
                    id: res.data._id,
                    name: res.data.name,
                    field: res.data.field,
                    deadline: res.data.deadline,
                })
                console.log(this.state)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <MissionTitle text={this.state.name} />
                <MissionId text={this.state.id} />
                <MissionField text={this.state.field} />
                <MissionDeadline text={this.state.deadline} />
                <div className='button-mission-more'>
                    <Button>Ajouter un document</Button>
                </div>
            </div>
        )
    }
}

export default AllMissions
