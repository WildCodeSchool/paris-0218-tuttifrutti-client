import React from 'react'
import axios from 'axios'
import Login from './Login.js'
import Button from './Button.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LawyerTitleSpace from './TitleSpace.js'
import '../style/SignUp.css'

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
          <form  className='form' onSubmit={this.HandleSubmit}>
            <div className='aligne'>
            <input type ="text" name="firstName" placeholder="Nom" id="firstName" onChange={this.UpdateField} /> 
            <input type ="text" name="lastName" placeholder="Prenom" id="lastName" onChange={this.UpdateField}/>
            </div>
            <div ClassName='aligne'>            
            <input type="email" name="email" placeholder="Email" id="email" onChange={this.UpdateField}/>
             
            <input type ="text" name="phone" placeholder="Telephone" id="phone" onChange={this.UpdateField} />
            </div>
            <div>
            
            <input type ="text" name="cabinet" placeholder="Nom du Cabinet" id="cabinet" onChange={this.UpdateField} />
            
            <input type ="text" name="toque" placeholder="Numéro de Toque" id="toque" onChange={this.UpdateField} />        
            </div>
            <div>
            
            <input type ="text" name="address" placeholder="Adresse" id="address" onChange={this.UpdateField} />
            </div>
            <div>
            
            <input type ="text" name="city" placeholder="Ville" id="city" onChange={this.UpdateField} />        
            
            <input type ="text" name="zipCode" placeholder="Code Postal" id="zipCode" onChange={this.UpdateField} />
            </div>
            <div>     
            <input type ="text" name="domaine" placeholder="Domaine" id="domaine" onChange={this.UpdateField} />
            <select> 
              <option value="1">droit</option>
              <option value="2">droit2</option>
              <option value="3">droit3</option>
              <option value="4">droit4</option>
              <option value="5">droit5</option>
            </select>
            </div>
            <div>
            <input type ="password" name="password" placeholder="Mot de passe" id="password" onChange={this.UpdateField} />
            <input type ="password" name="passwordComfirm" placeholder="Confimer le mot de passe" id="passwordComfirm" />
            </div>
            <button type ="submit">S'incrire</button>
            <p> Déjà inscrit ? <Link to={`/login`}> <a href text='login' />Connectez-vous</Link></p>
            <Route path='/login' component={Login} /> 
          </form>
        </div>
      )
    }
  }
  
  export default SignUp