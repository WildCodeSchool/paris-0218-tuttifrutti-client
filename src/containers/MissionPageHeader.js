import React from 'react'
import { Link } from 'react-router-dom'
import GoBack from '../components/GoBack.js'
import MissionPageTitle from '../components/MissionPageTitle.js'

class MissionPageHeader extends React.Component {
  render () {
    return (
      <div>
        <Link to={this.props.to}><GoBack text={this.props.text}/></Link>
        <MissionPageTitle text={this.props.title}/>
      </div>
    )
  }
}

export default MissionPageHeader
