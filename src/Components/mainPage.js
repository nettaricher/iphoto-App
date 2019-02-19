import React, { Component } from 'react'
import Header from '../Header'
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
        <Header/>
        <Rated/>
        <Liked/>
        <All/>
        {/* <Team/> */}
      </div>
    );
  }
}

export default mainPage;
