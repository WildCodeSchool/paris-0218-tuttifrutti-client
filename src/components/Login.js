import React from 'react'
// import axios from 'axios'

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
        console.log(creds)

        fetch(`http://localhost:3030/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({ creds })
        })
        // axios
        //     .post(`http://localhost:3030/login`, {creds})
        //     .then(res => {
        //         console.log(res)
        //         console.log(res.data)
        //     })
    }

    componentDidMount() {
      fetch('http://localhost:3030/', {
        credentials: 'include'
      })
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