import React from 'react'
import Button from './Button.js'
import LawyerTitleSpace from './LawyerTitle.js'
import LinkSignUpConnect from './LinkSignUpConnect.js'
import '../style/Login.css'

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

    HandleSubmit = (event, req) => {
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
            credentials: 'include',
            body: JSON.stringify({creds})
        })
    }

    componentDidMount() {
        fetch('http://localhost:3030/', {credentials: 'include'})
    }

    render() {
        return (
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
                                <Button text="Valider" />
                            </form>
                        </div>
                    </div>
                    <div className='link-signup-connect'>
                    <LinkSignUpConnect text1='Pas encore inscrit ?' text2='Créez votre compte' linkRoute='/reg' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login