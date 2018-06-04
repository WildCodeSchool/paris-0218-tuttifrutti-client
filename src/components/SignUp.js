import React from 'react'
import axios from 'axios'
import Login from './Login.js'
import Button from './Button.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LawyerTitleSpace from './TitleSpace.js'

class SignUp extends React.Component {
    state={
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    cabinet: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    toque: '',
    field: '' 
    }
    
  UpdateField = event => {this.setState({[event.target.name] : event.target.value})}

    HandleSubmit = event => { 
        event.preventDefault();
        console.log('testest')
        
       const user = {
        email:  this.state.email ,
        password:       this.state.password ,
        firstName:      this.state.firstName ,
        lastName:       this.state.lastName ,
        cabinet:        this.state.cabinet ,
        phone:          this.state.phone ,
        address:        this.state.address ,
        city :          this.state.city,
        zipCode:        this.state.zipCode ,
        toque:      this.state.toque ,
        field:      this.state.field ,
      };
      console.log(user)
  
      axios.post(`http://localhost:3030/reg`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        })
    }

    render() {
      return (
        <div>
          <LawyerTitleSpace />
          <form  ClassName= 'form' onSubmit={this.HandleSubmit}>
            <label htmlFor = "firstname"> Nom </label>
            <input type ="text" name="firstName" id="firstName" onChange={this.UpdateField} />
            <label htmlFor = "lastName"> Prenom </label>
            <input type ="text" name="lastName" id="lastName" onChange={this.UpdateField}/>
            <label htmlFor = "email"> Email </label>
            <input type="email" name="email" id="email" onChange={this.UpdateField}/>
            <label htmlFor = "phone"> Telephone </label>
            <input type ="text" name="phone" id="phone" onChange={this.UpdateField} />
            <label htmlFor = "cabinet">Nom du Cabinet </label>
            <input type ="text" name="cabinet" id="cabinet" onChange={this.UpdateField} />
            <label htmlFor = "toque"> Numéro de Toque </label>
            <input type ="text" name="toque" id="toque" onChange={this.UpdateField} />        
            <label htmlFor = "address"> Adresse </label>
            <input type ="text" name="address" id="address" onChange={this.UpdateField} />
            <label htmlFor = "zipCode"> Code Postal </label>
            <input type ="text" name="city" id="city" onChange={this.UpdateField} />        
            <label htmlFor = "city"> Ville </label>
            <input type ="text" name="zipCode" id="zipCode" onChange={this.UpdateField} />     
            <label htmlFor = "field"> Domaine </label>
            <input type ="text" name="field" id="field" onChange={this.UpdateField} />
            <label htmlFor = "password"> Mot de passe </label>
            <input type ="password" name="password" id="password" onChange={this.UpdateField} />
            <label htmlFor = "passwordComfirm"> Confirmer le mot de passe </label>
            <input type ="password" name="passwordComfirm" id="passwordComfirm" />
            <button type ="submit">S'incrire</button>
            <p> Déjà inscrit ? <Link to={`/login`}> <a href text='login' />Connectez-vous</Link></p>
            <Route path='/login' component={Login} /> 
          </form>
        </div>
      )
    }
  }
  
  export default SignUp