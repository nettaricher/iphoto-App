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
      this.props.history.push("/2018-2019/dcs/dev_275/");
    })
    .catch(err => { console.error(err) })
  }

  render(){
    return(
        <div>
          <Header/>
          <form style={{marginTop:'50px', textAlign: 'center', fontFamily: 'Francois One, sans-serif'}} onSubmit={this.handleSubmit}>
            <div>User Name:</div>
              <input type="text" name='name' ref='name' required/>
              <br/><br/>
            <div>Email:</div>
              <input type="email" size="30" name='email' ref='email' required/>
              <br/><br/>
              <div>Password:</div>
              <input type="password" name='pass' ref='pass' required/>
              <br/><br/>
              <label><input
                        type="radio"
                        value="USER"
                        name='group'
                        onChange={this.handleChange}
                      />
                      USER
                      </label>&nbsp;
              <label><input
                        type="radio"
                        value="PHOTOGRAPHER"
                        name='group'
                        onChange={this.handleChange}
                      />
                      PHOTOGRAPHER
                      </label>&nbsp;
              <br/><br/>
              <span>
                <input type="submit" value="Submit"/>
              </span>
          </form><br/><br/><br/><br/><br/><br/>
        </div>
    )
  }
}
export default register
