import React from 'react'
import { Link } from 'react-router-dom'

const LinkSignUpConnect = ({ text1, text2, linkRoute }) => {
  return (
      <div>
        <p>{text1} <Link to={linkRoute}>{text2}</Link></p>
      </div>
  )
}

export default LinkSignUpConnect
