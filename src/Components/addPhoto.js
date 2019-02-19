import React, { Component } from 'react'

class Photo extends Component
{
  constructor(props) {
    super(props)
    this.state =  { 
                    editing: true,
                    url: '', name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const obj = {   name: this.refs.name.value,
                    URL: this.refs.url.value,
                    userID: localStorage.getItem('userID')
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
      this.props.history.push("/profile");
    })
    .catch(err => { console.error(err) })
  }

  render(){
    return(
      <div>
          <form style={{marginTop:'50px', textAlign: 'center', fontFamily: 'Francois One, sans-serif'}} onSubmit={this.handleSubmit}>
          <div>Name:</div>
            <input type="text" name='name' ref='name'/>
            <br/><br/>
          <div>URL:</div>
            <input type="text" size="50" name='url' ref='url'/>
            <br/><br/>
            <div>Description:</div>
            <textarea rows="5" cols="50" type="text" name='desc' ref='desc'/>
            <br/><br/>
            <span>
              <input type="submit" value="Submit"/>
            </span>
          </form>
        </div>
    )
  }
}
export default Photo