import React, {Component} from 'react'
import HeaderSite from '../containers/HeaderSite.js'
import PageTitle from './PageTitle.js'
import axios from 'axios'
import Footer from '../containers/Footer.js'
import './style/LoginForm.css'

class MissionConfirm extends Component {

    state = {
        user: '',
				missionId: '',
				mission: '',
        response: ''
    }

    componentWillMount() {
        const queryString = window
            .location
            .pathname
            .split(`/`)
        this.setState({user: queryString[3]})
        this.setState({missionId: queryString[2]})

		}

		componentDidMount() {
			axios
			.get(`http://localhost:3030/missions/${this.state.missionId}`)
			.then((res) => {
				this.setState({mission: res.data})
			})
		}

    submit = () => {
        axios
            .get(`http://localhost:3030/accept/${this.state.missionId}/${this.state.user}`)
            .then((response) => {
                this.setState({response: response.data})
            })
    }

    Blop = () => {
        return <div><p>{this.state.response}</p></div>
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <HeaderSite redirect='/'/>
                <div className='login-content'>
                    <div>
                        <div className='title-login'>
                            <PageTitle espace='Pour accepter la mission appuyer sur le boutton'/>
                        </div>
                        <div>
                            <div className='form-login-container'>
                                <button type="button" className='button' onClick={this.submit}>Je confirme</button>
                            </div>
                        </div>
                        <this.Blop />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MissionConfirm
