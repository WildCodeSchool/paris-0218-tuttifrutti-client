import React, { Component } from 'react'
import { userInfo } from '../User.js'
import HeaderSite from './HeaderSite.js'
import HeaderName from '../components/HeaderName.js'
import HeaderParameters from '../components/HeaderParameters.js'
import './style/HomeLawyerHeader.css'

class HomeLawyerHeader extends Component {

  state = {
    author: ''
  }

  componentDidMount() {
    userInfo().then(res =>
      this.setState({ author: res.cabinet }))
  }

  render() {
    return (
      <div>
        <HeaderSite redirect='/profile'/>
        <div className='home-lawyer-header'>
          <div>
            <HeaderName text={this.state.author} />
            <HeaderParameters />
          </div>
        </div>
      </div>
    )
  }
}
export default HomeLawyerHeader
