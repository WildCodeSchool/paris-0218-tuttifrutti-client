import React from 'react'

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
            credentials: 'include',
            body: JSON.stringify({creds})
        }).then(response => {
            response.json()
                .then(responseJson => {
                    localStorage.setItem('token', responseJson.token)
                })
        })

    }

    componentDidMount() {
        fetch('http://localhost:3030/', {credentials: 'include'})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" onChange={this.UpdateField}/>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" onChange={this.UpdateField}/>
                    <button type="submit">Valider</button>
                </form>
            </div>
        )
    }
}

export default Login