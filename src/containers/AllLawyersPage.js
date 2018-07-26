import React from 'react'
import HomeAdminHeader from './HomeAdminHeader.js'
import AllLawyers from '../components/AllLawyers.js'
import MissionPageHeader from '../containers/MissionPageHeader.js'
import Footer from '../containers/Footer.js'
import { verifToken } from '../api.js'

class AllLawyersPage extends React.Component {
  componentWillMount () {
    const token = localStorage.getItem('token')
    if (token === null) {
      window.location.replace('/loginadmin')
    } else {
      // fetch(`http://localhost:3030/secure`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
			// })
			verifToken(token)
			.then(response => {
        response.json().then(responseJson => {
          if (responseJson === 'not logged') {
            window.location.replace('/loginadmin')
          }
        })
      })
    }
  }

  render () {
    return (
      <div>
        <HomeAdminHeader />
        <MissionPageHeader to='/admin' text='< Retour au profil' title='avocats'/>
        <AllLawyers />
        <Footer />
      </div>
    )
  }
}

export default AllLawyersPage
