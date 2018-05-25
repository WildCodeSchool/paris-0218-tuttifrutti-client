import React from 'react';

// const authElement = document.getElementById('auth')
// const messageElement = document.getElementById('message')
// const signInForm = document.getElementById('sign-in-form')
// const signOutForm = document.getElementById('sign-out-form')

// SignIUpForm.addEventListener('submit', e => {
//     e.preventDefault()

//     const credentials = {

//         email: req.body.email,
//         password: req.body.password,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         cabinet: req.body.cabinet,
//         phone: req.body.phone,
//         address: req.body.address,
//         zipCode: req.body.zipCode,
//         toque: req.body.toque,
//         field: req.body.field
//     }

//     fetch('http://localhost:3232/sign-in', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         'credentials': 'include', // Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
//         body: JSON.stringify(credentials)
//     }).then(res => res.json())
// })

const SignUp = () => {
    return (
        <form  method="POST" action="http://localhost:3030/reg">
            <label>
                Email
            </label>
            <input type="email" name="email"/>
            <label>
                Password
            </label>
            <input type="password" name="password"/> {/* <label> Comfirm Password </label>
            <input type ="password" name="passwordComfirm"/> */}
            <label>
                Prenom
            </label>
            <input type="text" name="firstName"/>
            <label>
                Nom
            </label>
            <input type="text" name="lastName"/>
            <label>
                Cabinet
            </label>
            <input type="text" name="cabinet"/>
            <label>
                Phone
            </label>
            <input type="text" name="phone"/>
            <label>
                Address
            </label>
            <input type="text" name="address"/>
            <label>
                Code Postal
            </label>
            <input type="text" name="zip"/>
            <label>
                Toque
            </label>
            <input type="text" name="toque"/>
            <label>
                Domaine d'activité
            </label>
            <input type="text" name="field"/>
            <button type="submit">Valider</button>
        </form>
    )
}

export default SignUp