import React from 'react'
import axios from 'axios'
import Button from '../components/Button.js'
import './style/Mission.css'

class Mission extends React.Component {
        state = {
            name: '',
            field: '',
            deadline: '',
            price: '',
            description: ''
        }
    
    componentDidMount() {
        axios.get(`http://localhost:3030/mission/5b1fe8dfd9cdec2879abad2a`)
            .then(console.log('ok'))
            .then((res) => {
                this.setState({
                    name: res.data.name,
                    field: res.data.field,
                    deadline: res.data.deadline,
                    price: res.data.price,
                    description: res.data.description
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
                <p>{this.state.name}</p>
                <p>{this.state.field}</p>
                <p>{this.state.deadline}</p>
                <p>{this.state.price}</p>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

export default Mission