import React, { Component } from 'react'
import Header from '../Header'
class addTour extends Component
{
  constructor(props) {
    super(props)
    this.state =  { 
                    editing: true,
                    url: '', name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderForm = this.renderForm.bind(this)
    this.renderAccepted = this.renderAccepted.bind(this)
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
        this.props.history.push("/home");
      }
      else {
        this.setState({editing: false})
      }
    })
    .catch(err => { console.error(err) })
  }
  renderAccepted(){
    return(
      <div>
        <Header/>
        <h3 style = {{color: 'red', textAlign: 'center'}}>Invalid username/password</h3>
      <form style={{marginTop:'50px', textAlign: 'center', fontFamily: 'Francois One, sans-serif'}} onSubmit={this.handleSubmit}>
      <div>Username:</div>
        <input type="text" name='username' ref='username'/>
        <br/><br/>
      <div>Password:</div>
        <input type="text" name='password' ref='password'/>
        <br/><br/>
        <span>
          <input type="submit" value="Login"/>
        </span>
      </form>
    </div>
    )
  }
  renderForm(){
    return(
      <div>
        <Header/>
          <form style={{marginTop:'50px', textAlign: 'center', fontFamily: 'Francois One, sans-serif'}} onSubmit={this.handleSubmit}>
          <div>Username:</div>
            <input type="text" name='username' ref='username'/>
            <br/><br/>
          <div>Password:</div>
            <input type="text" name='password' ref='password'/>
            <br/><br/>
            <span>
              <input type="submit" value="Login"/>
            </span>
          </form>
        </div>
    )
  }
  render() {
    return this.state.editing ? this.renderForm() : this.renderAccepted()
  }
}
export default addTour