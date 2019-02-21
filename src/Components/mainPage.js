import React, { Component } from 'react'
import Header from '../Header'
import Rated  from '../Components/rated'
import Liked  from '../Components/liked'
import All    from '../Components/all'

class mainPage extends Component {
  render() {
      return (
        <div>
          <Header/>
          <Rated/>
          <Liked/>
          <All/>
        </div>
      );
  }
}

export default mainPage;
