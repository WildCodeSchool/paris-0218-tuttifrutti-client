import React, {Component} from 'react'
import HeaderSite from '../containers/HeaderSite.js'
import PageTitle from './PageTitle.js'
import axios from 'axios'
import Footer from '../containers/Footer.js'
import './style/LoginForm.css'

class EmailConfirm extends Component {

    state = {
        user: '',
        response: ''
    }

    componentWillMount() {
      
        const queryString = window
            .location
            .pathname
            .split(`/`)
            this.setState({user: queryString[2]})
            this.setState({mission: queryString[3]})
        console.log(queryString)
    }

    submit = () => {
        console.log('trigger')
        axios
            .get(`http://localhost:3030/confirmation/${this.state.user}`)
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
                            <PageTitle espace='Pour confirmer son compte, cliquer sur le boutton :'/>
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

export default EmailConfirm