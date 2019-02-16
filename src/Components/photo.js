import React, { Component } from 'react'

class Photo extends Component {
  constructor(props) {
    super(props)

  }

 
render() {
    return (
      <div>
        <img src = {this.props.children} style={{width: '100%', height: 'auto'}} alt = {this.props.children}></img>
      </div>
    );
  }
}

export default Photo;
