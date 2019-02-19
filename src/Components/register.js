import React, { Component } from 'react'
import Header from '../Header'
class register extends Component
{
  constructor(props) {
    super(props)
    this.state =  { 
                    editing: true,
                    user: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm  = this.renderForm.bind(this)
    this.renderAccepted = this.renderAccepted.bind(this)
  }

  handleChange(event) {
    this.setState({
      user: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = {   name:     this.refs.name.value,
                    email:    this.refs.email.value,
                    password: this.refs.pass.value,
                    group:    this.state.user
                }
    const url = 'https://vast-inlet-95722.herokuapp.com/user/';
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
      console.log(res)
      this.setState({editing: false})
    })
    .catch(err => { console.error(err) })
  }
  renderAccepted(){
    return(
      <div>
        <Header/>
        Success!</div>
    )
  }
  renderForm(){
    return(
      <div>
          <Header/>
          <form style={{marginTop:'50px', textAlign: 'center', fontFamily: 'Francois One, sans-serif'}} onSubmit={this.handleSubmit}>
          <div>User Name:</div>
            <input type="text" name='name' ref='name'/>
            <br/><br/>
          <div>Email:</div>
            <input type="text" size="30" name='email' ref='email'/>
            <br/><br/>
            <div>Password:</div>
            <input type="text" name='pass' ref='pass'/>
            <br/><br/>
            <label><input
                        type="radio"
                        value="USER"
                        name='group'
                        checked={this.state.user === "USER"}
                        onChange={this.handleChange}
                    />
                     USER
                     </label>&nbsp;
            <label><input
                        type="radio"
                        value="PHOTOGRAPHER"
                        name='group'
                        checked={this.state.user === "PHOTOGRAPHER"}
                        onChange={this.handleChange}
                    />
                    PHOTOGRAPHER
                    </label>&nbsp;
            <br/><br/>
            <span>
              <input type="submit" value="Submit"/>
            </span>
          </form>
        </div>
    )
  }
  render() {
    return this.state.editing ? this.renderForm() : this.renderAccepted()
  }
}
export default register
