import React, { Component } from 'react'
import HomeAdminHeader from './HomeAdminHeader.js'
import Footer from './Footer.js'
import './style/HomeAdmin.css'

class HomeAdmin extends Component {

  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) { window.location.replace('/loginadmin') } else {
      fetch(`http://localhost:3030/secure`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      ).then(response => {
        response.json().then(responseJson => {
          console.log(responseJson)
          if (responseJson === 'notlogged') {
            console.log('blop')
            window.location.replace('/loginadmin')
          }
        })
      })
    }
  }

  render () {

    return (
      <div className='home-admin'>
        <div><HomeAdminHeader /></div>
				<p>Interface admin</p>
        <div><Footer /></div>
      </div>
    )
  }
}

export default HomeAdmin
