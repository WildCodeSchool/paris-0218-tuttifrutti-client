import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Button from './Button.js'
import LawyerTitleSpace from './LawyerTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import '../style/Login.css'
import HomeLawyer from '../containers/HomeLawyer.js'

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    UpdateField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    HandleSubmit = (event, req, res) => {
        event.preventDefault()
        const creds = {
            email: this.state.email,
            password: this.state.password
        }
        fetch(`http://localhost:3030/login`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            // credentials: 'include',
            body: JSON.stringify({creds})
        }).then(response => {
            response.json()
                .then(responseJson => {
                    localStorage.setItem('token', responseJson.token)
                })
        })

    }

    componentDidMount() {
        fetch('http://localhost:3030/')
    }

    render() {
        return (
            <Router>
            <div className='login-content'>
                <div>
                    <div className='title-component'>
                        <LawyerTitleSpace title='Connexion' />
                    </div>
                    <div>
                        <div className='form-login'>
                            <form className="form" onSubmit={this.HandleSubmit}>
                                <input type="email" name="email" placeholder="Email" onChange={this.UpdateField}/>
                                <input type="password" name="password" placeholder="Mot de passe" onChange={this.UpdateField}/>
                                <Link to={`/profile`}> <Button text="Valider" /></Link>
                            </form>
                        </div>
                    </div>
                    <div className='link-signup-connect'>
                    <LinkSignUpConnect text1='Pas encore inscrit ?' text2='Créez votre compte' linkRoute='/reg' />
                    </div>
                </div>
                <Route path='/profile' component={HomeLawyer}/>
            </div>
            
            </Router>
        )
    }
}

export default Login