import React from 'react'
import './style/Button.css'

const Button = ({children}) => (
  <button className='button' type='submit'>{children}</button>
)
export default Button
