import React, { Component } from 'react'

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
    const obj = {   name: this.refs.name.value,
                    URL: this.refs.url.value,
                    userID: "1"
                }
    console.log(obj)
    const url = 'https://vast-inlet-95722.herokuapp.com/photo';
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
      <div>Success!</div>
    )
  }
  renderForm(){
    return(
      <div>
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