import React, { Component } from 'react'
import Header from '../Header'

class Login extends Component
{
  constructor(props) {
    super(props)
    this.state = {unAuthorized: false}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderUnAuth = this.renderUnAuth.bind(this);
    this.renderLogin  = this.renderLogin.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = {   name: this.refs.username.value,
                    password: this.refs.password.value
                }
    const url = 'https://vast-inlet-95722.herokuapp.com/login';
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
          "Content-Type": "application/json"
      }, 
      body: JSON.stringify(obj)
    }
    fetch(url, options).then(res => res.json())
    .then(res => {
      if (res){
        localStorage.setItem('name',   res.name)
        localStorage.setItem('userID', res.userID)
        localStorage.setItem('email',  res.email)
        localStorage.setItem('group',  res.group)
        this.props.history.push("/2018-2019/dcs/dev_275/home");
      }
      else {
        this.setState({unAuthorized: true})
      }
    })
    .catch(err => { console.error(err) })
  }

  renderUnAuth(){
    return(
      <div>
        <Header/>
        <h3 style = {{color: 'red', textAlign: 'center'}}>Invalid username/password</h3>
        <form style={{marginTop:'50px', textAlign: 'center', fontFamily: 'Francois One, sans-serif'}} onSubmit={this.handleSubmit}>
          <div>Username:</div>
          <input type="text" name='username' ref='username'/>
          <br/><br/>
          <div>Password:</div>
          <input type="password" name='password' ref='password'/>
          <br/><br/>
          <span>
            <input type="submit" value="Login"/>
          </span>
        </form><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }

  renderLogin(){
    return(
      <div>
        <Header/>
        <form style={{marginTop:'50px', textAlign: 'center', fontFamily: 'Francois One, sans-serif'}} onSubmit={this.handleSubmit}>
          <div>Username:</div>
          <input type="text" name='username' ref='username'/>
          <br/><br/>
          <div>Password:</div>
          <input type="password" name='password' ref='password'/>
          <br/><br/>
          <span>
            <input type="submit" value="Login"/>
          </span>
        </form><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
  
  render(){
    return this.state.unAuthorized ? this.renderUnAuth() : this.renderLogin() 
  }
}
export default Login