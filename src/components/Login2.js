import React from 'react'
import  { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
    }



    
    componentWillMount() {
        const token = localStorage.getItem('token')
        if (token === null) {window.location.replace("http://stackoverflow.com")}
        else {
        fetch(`http://localhost:3030/secure`, {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${token}`
            },
            credentials: 'include',
        } 
    )}}

    render() {
        return (
            <div>
                <h1>AUTHENTICATED</h1>
            </div>
        )
    }
}

export default Login