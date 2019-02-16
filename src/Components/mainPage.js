import React, { Component } from 'react'
import Rated from '../Components/rated'
import Liked from '../Components/liked'
import All from '../Components/all'
// import Team from '../Components/team'

class mainPage extends Component {
componentDidMount() {

}

render() {
    return (
      <div>
        <Rated/>
        <Liked/>
        <All/>
        {/* <Team/> */}
      </div>
    );
  }
}

export default mainPage;
