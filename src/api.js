import jwt_decode from 'jwt-decode'
import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'
console.log(`API url: '${apiUrl}'`)

// LOGIN

export const loginLawyer = creds => {
  return fetch(`${apiUrl}/login`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ creds })
	})
}

export const loginAdmin = creds => {
  return fetch(`${apiUrl}/loginadmin`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ creds })
	})
}

// VERIFICATION TOKEN

export const verifToken = token => {
  return fetch(`${apiUrl}/secure`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}

// INSCRIPTION

export const signUpLawyer = user => {
  return axios.post(`${apiUrl}/reg`, { user })
    .then(res => {
      return res
    })
}

export const signUpAdmin = user => {
  return axios.post(`${apiUrl}/signupadmin`, { user })
    .then(res => {
      return res
    })
}

export const signUpStudent = user => {
  return axios.post(`${apiUrl}/regstudent`, { user })
    .then(res => {
      return res
    })
}

// USERS INFO : LAWYER & ADMIN

export const userInfo = () => {
  const token = localStorage.getItem('token')
  const decoded = jwt_decode(token)
  return axios.post(`${apiUrl}/infolawyer`, { decoded })
    .then(res => {
      return res.data
    })
}

export const updateInfoLawyer = user => {
	return axios.put(`${apiUrl}/infolawyer`, { user })
	.then(res => {
		return res
	})
}

export const userInfoAdmin = () => {
  const token = localStorage.getItem('token')
  const decoded = jwt_decode(token)
  return axios.post(`${apiUrl}/infoadmin`, { decoded })
    .then(res => {
      return res.data
    })
}

export const updateInfoAdmin = user => {
	return axios.put(`${apiUrl}/infoadmin`, { user })
	.then(res => {
		return res
	})
}

export const infoStudent = id => {
  return axios.post(`${apiUrl}/infostudent`, {
			studentId: id
		})
    .then(res => {
      return res.data
    })
}

// LAWYER INTERFACE : MISSIONS

export const createNewMission = mission => {
	return axios.post(`${apiUrl}/missions`, { mission })
	.then(res => {
		return res
	})
}

export const getAllMissions = lawyerId => {
	return axios.post(`${apiUrl}/missionsfiltered`,
	{ lawyerId })
		.then(res => {
			return res.data
		})
}

export const getOneMission = missionId => {
	return axios.get(`${apiUrl}${missionId}`)
		.then(res => {
			return res
		})
}

export const getOldMissions = lawyerId => {
	return axios.post(`${apiUrl}/oldmissionsfiltered`, { lawyerId })
		.then(res => {
			return res.data
		})
}

// LAWYER INTERFACE : UPLAOD FILE

export const missionUploadFile = file => {
	return axios.post('${apiUrl}/upload', file)
	.then(res => {
		return res
	})
}

export const missionStockUploadedFilesName = (mission, fileName) => {
	return axios.put(`${apiUrl}${mission}`,{fileName})
	.then(res => {
		return res
	})
}

// LAWYER INTERFACE : REPORT PROBLEM ON ONE FINISHED MISSION

export const missionReportProblem = (id, messageContent) => {
	return axios.post(`${apiUrl}/missions/${id}/reportproblem`,
	{ messageContent })
	.then(res => {
		return res
	})
}

// LAWYER INTERFACE : SEND MESSAGE TO STUDENT

export const missionSendMessage = (id, messageContent) => {
	return axios.post(`${apiUrl}/missions/${id}/sendmessage`,
	{ messageContent })
	.then(res => {
		return res
	})
}


// ADMIN INTERFACE : LAWYERS

export const getAllLawyers = () => {
	return axios.get(`${apiUrl}/alllawyers`)
		.then(res => {
			return res.data
		})
}

// ADMIN INTERFACE : STUDENTS

export const getAllStudents = () => {
	return axios.get(`${apiUrl}/allstudents`)
		.then(res => {
			return res
		})
}

export const approvedStudent = user => {
	return axios.post(`${apiUrl}/allstudents`, { user })
	.then(res => {
		return res
	})
}

// INSCRIPTIONS CONFIRMATIONS

export const getAdminInfoConfirmMail = user => {
	return axios.get(`${apiUrl}/confirmationadmin/${user}`)
	.then(res => {
		return res
	})
}

export const getLawyerInfoConfirmMail = user => {
	return axios.get(`${apiUrl}/confirmationlawyer/${user}`)
		.then(res => {
		return res
	})
}

export const getStudentInfoConfirmMail = user => {
	return axios.get(`${apiUrl}/confirmationstudent/${user}`)
	.then(res => {
		return res
	})
}

// STUDENT : CONFIRMATION MISSION

export const getMissionInfoConfirmPage = id => {
	return axios.get(`${apiUrl}/missions/${id}`)
	.then(res => {
		return res
	})
}

export const getStudentInfoConfirmPage = (id, student) => {
	return axios.get(`${apiUrl}/accept/${id}/${student}`)
	.then(res => {
		return res
	})
}






