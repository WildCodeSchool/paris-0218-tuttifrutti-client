import jwt_decode from 'jwt-decode'
import axios from 'axios'

export const userInfo = () => {
  const token = localStorage.getItem('token')
  const decoded = jwt_decode(token)
  return axios.post(`http://localhost:3030/infolawyer`, { decoded })
    .then(res => {
      return res.data
    })
}

export const userInfoAdmin = () => {
  const token = localStorage.getItem('token')
  const decoded = jwt_decode(token)
  return axios.post(`http://localhost:3030/infoadmin`, { decoded })
    .then(res => {
      return res.data
    })
}
