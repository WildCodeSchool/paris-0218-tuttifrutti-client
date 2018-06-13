import React from 'react'
// import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) { window.location.replace('/login') } else {
      fetch(`http://localhost:3030/secure`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      ).then(response => {
        response.json()
          .then(responseJson => {
            console.log(responseJson)
            if (responseJson === 'notlogged') {
              console.log('blop')
              window.location.replace('/login')
            }
          })
      })
    }
  }

  render () {
    return (
      <div>
        <h1>AUTHENTICATED</h1>
      </div>
    )
  }
}

export default Login
