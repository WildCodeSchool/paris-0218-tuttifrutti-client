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

export const getAllMissions = lawyerId => {
	return axios.post(`http://localhost:3030/missionsfiltered`,
	{ lawyerId })
		.then(res => {
			return res.data
		})
}

export const getOneMission = missionId => {
	return axios.get(`http://localhost:3030${missionId}`)
		.then(res => {
			return res
		})
}

export const getOldMissions = lawyerId => {
	return axios.post(`http://localhost:3030/oldmissionsfiltered`, { lawyerId })
		.then(res => {
			return res.data
		})
}

