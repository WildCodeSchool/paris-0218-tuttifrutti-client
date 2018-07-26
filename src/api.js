import jwt_decode from 'jwt-decode'
import axios from 'axios'


// LOGIN

export const loginLawyer = creds => {
  return fetch(`http://localhost:3030/login`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ creds })
	})
}

export const loginAdmin = creds => {
  return fetch(`http://localhost:3030/loginadmin`, {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ creds })
	})
}

// VERIFICATION TOKEN

export const verifToken = token => {
  return fetch(`http://localhost:3030/secure`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}

// INSCRIPTION

export const signUpLawyer = user => {
  return axios.post(`http://localhost:3030/reg`, { user })
    .then(res => {
      return res
    })
}

export const signUpAdmin = user => {
  return axios.post(`http://localhost:3030/signupadmin`, { user })
    .then(res => {
      return res
    })
}

export const signUpStudent = user => {
  return axios.post(`http://localhost:3030/signupstudent`, { user })
    .then(res => {
      return res
    })
}

// USERS INFO : LAWYER & ADMIN

export const userInfo = () => {
  const token = localStorage.getItem('token')
  const decoded = jwt_decode(token)
  return axios.post(`http://localhost:3030/infolawyer`, { decoded })
    .then(res => {
      return res.data
    })
}

export const updateInfoLawyer = user => {
	console.log(user)
	return axios.put(`http://localhost:3030/infolawyer`, { user })
	.then(res => {
		return res
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

export const updateInfoAdmin = user => {
	console.log(user)
	return axios.put(`http://localhost:3030/infoadmin`, { user })
	.then(res => {
		return res
	})
}

export const infoStudent = id => {
	console.log(id)
  return axios.post(`http://localhost:3030/infostudent`, {
			studentId: id
		})
    .then(res => {
      return res.data
    })
}

// LAWYER INTERFACE : MISSIONS

export const createNewMission = mission => {
	return axios.post(`http://localhost:3030/missions`, { mission })
	.then(res => {
		return res
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

// LAWYER INTERFACE : UPLAOD FILE

export const missionUploadFile = file => {
	return axios.post('http://localhost:3030/upload', file)
	.then(res => {
		return res
	})
}

export const missionStockUploadedFilesName = (mission, name) => {
	return axios.put(`http://localhost:3030${mission}`,{name})
	.then(res => {
		console.log(res)
		return res
	})
}

// LAWYER INTERFACE : REPORT PROBLEM ON ONE FINISHED MISSION

export const missionReportProblem = (id, messageContent) => {
	return axios.post(`http://localhost:3030/missions/${id}/reportproblem`,
	{ messageContent })
	.then(res => {
		return res
	})
}

// LAWYER INTERFACE : SEND MESSAGE TO STUDENT

export const missionSendMessage = (id, messageContent) => {
	return axios.post(`http://localhost:3030/missions/${id}/sendmessage`,
	{ messageContent })
	.then(res => {
		return res
	})
}


// ADMIN INTERFACE : LAWYERS

export const getAllLawyers = () => {
	return axios.get(`http://localhost:3030/alllawyers`)
		.then(res => {
			return res.data
		})
}

// ADMIN INTERFACE : STUDENTS

export const getAllStudents = () => {
	return axios.get(`http://localhost:3030/allstudents`)
		.then(res => {
			return res
		})
}

export const approvedStudent = user => {
	return axios.post(`http://localhost:3030/allstudents`, { user })
	.then(res => {
		return res
	})
}

// INSCRIPTIONS CONFIRMATIONS

export const getAdminInfoConfirmMail = user => {
	return axios.get(`http://localhost:3030/confirmationadmin/${user}`)
	.then(res => {
		return res
	})
}

export const getLawyerInfoConfirmMail = user => {
	return axios.get(`http://localhost:3030/confirmationlawyer/${user}`)
		console.log(this.state)
		.then(res => {
		return res
	})
}

export const getStudentInfoConfirmMail = user => {
	return axios.get(`http://localhost:3030/confirmationstudent/${user}`)
	.then(res => {
		return res
	})
}

// STUDENT : CONFIRMATION MISSION

export const getMissionInfoConfirmPage = id => {
	return axios.get(`http://localhost:3030/missions/${id}`)
	.then(res => {
		return res
	})
}

export const getStudentInfoConfirmPage = (id, student) => {
	return axios.get(`http://localhost:3030/accept/${id}/${student}`)
	.then(res => {
		return res
	})
}






