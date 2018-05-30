import React from 'react'
import axios from 'axios';

class SignUp extends React.Component {
    state={
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    cabinet: '',
    phone: '',
    address: '',
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
        phone:      this.state.phone ,
        address:        this.state.address ,
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
          <form onSubmit={this.HandleSubmit}>
            <label htmlFor = "email"> Email </label>
            <input type="email" name="email" id="email" onChange={this.UpdateField}/>
            <label htmlFor = "password"> Password </label>
            <input type ="password" name="password" id="password" onChange={this.UpdateField} />
            {/* <label htmlFor = "passwordComfirm"> Comfirm Password </label>
            <input type ="password" name="passwordComfirm" id="passwordComfirm" /> */}
            <label htmlFor = "firstname"> Name </label>
            <input type ="text" name="firstName" id="firstName" onChange={this.UpdateField} />
            <label htmlFor = "lastName"> Prenom </label>
            <input type ="text" name="lastName" id="lastName" onChange={this.UpdateField}/>
            <label htmlFor = "cabinet"> Cabinet </label>
            <input type ="text" name="cabinet" id="cabinet" onChange={this.UpdateField} />
            <label htmlFor = "phone"> Telephone </label>
            <input type ="text" name="phone" id="phone" onChange={this.UpdateField} />
            <label htmlFor = "address"> Address </label>
            <input type ="text" name="address" id="address" onChange={this.UpdateField} />
            <label htmlFor = "zipCode"> Code Postal </label>
            <input type ="text" name="zipCode" id="zipCode" onChange={this.UpdateField} />
            <label htmlFor = "toque"> Numero de Toque </label>
            <input type ="text" name="toque" id="toque" onChange={this.UpdateField} />
            <label htmlFor = "field"> Domaine </label>
            <input type ="text" name="field" id="field" onChange={this.UpdateField} />
            <button type ="submit">Valider</button>
          </form>
        </div>
      )
    }
  }
  
  export default SignUp