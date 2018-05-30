import React from 'react'
import axios from 'axios';

class Login extends React.Component {
    state={
    email: '',
    password: '',
    }
    
  UpdateField = event => {this.setState({[event.target.name] : event.target.value})}

    HandleSubmit = event => { 
        event.preventDefault();
        console.log('testest')
        
       const creds = {
        email:  this.state.email ,
        password:       this.state.password ,
      };
      console.log(creds)
  
      axios.post(`http://localhost:3030/login`, { creds })
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
            <input type="email" name="email" onChange={this.UpdateField}/>
            <label htmlFor = "password"> Password </label>
            <input type ="password" name="password" onChange={this.UpdateField} />
            <button type ="submit">Valider</button>
          </form>
        </div>
      )
    }
  }

export default Login