import React, { Component } from 'react'
import Rated from '../Components/rated'
import Liked from '../Components/liked'
import All from '../Components/all'

class mainPage extends Component {
  constructor(props) {
    super(props)

  }
componentDidMount() {

}

render() {
    return (
      <div>
        <Rated/>
        <Liked/>
        <All/>
      </div>
    );
  }
}

export default mainPage;
