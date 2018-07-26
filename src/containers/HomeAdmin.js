import React, { Component } from 'react'
import HomeAdminHeader from './HomeAdminHeader.js'
import Footer from './Footer.js'
import HomeAdminMenu from './HomeAdminMenu.js'
import './style/HomeAdmin.css'
import { verifToken } from '../api.js';

class HomeAdmin extends Component {

  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) { window.location.replace('/loginadmin') } else {
			verifToken(token)
			.then(response => {
        response.json().then(responseJson => {
          if (responseJson === 'notlogged') {
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
				<div><HomeAdminMenu /></div>
        <div><Footer /></div>
      </div>
    )
  }
}

export default HomeAdmin
