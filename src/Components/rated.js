import React, { Component } from 'react'
import Photo from './photo';

class Rated extends Component {
  constructor(props) {
    super(props)
    this.state = {photos: []}

    this.eachPhoto  = this.eachPhoto.bind(this)
    this.add        = this.add.bind(this)
  }
  
componentDidMount() {
    const url = 'https://vast-inlet-95722.herokuapp.com/photo/sortbyrate';
    fetch(url)
    .then(res => res.json())
    .then(data => data.map(photo => 
        this.add(
        {
          likes_array:  photo.likes_array, 
          rates_array:  photo.rates_array, 
          photoID:      photo.photoID,
          name:         photo.name,
          URL:          photo.URL,
          userID:       photo.userID,
          likes:        photo.likes,
          num_of_rates: photo.num_of_rates,
          rates_sum:    photo.rates_sum,
          total_rate:   photo.total_rate

        })
    ))
    .catch(err => console.error(err));
}

add({ 
     likes_array = null,
     rates_array = null,
     photoID     = null,
     name        = null, 
     URL         = null, 
     userID      = null, 
     likes       = null,
     num_of_rates= null,
     rates_sum   = null,
     total_rate  = null
    }) {
    this.setState(prevState => ({
      photos: [
        ...prevState.photos, {
        likes_array:  likes_array,
        rates_array:  rates_array,
        photoID:      photoID,
        name:         name, 
        URL:          URL, 
        userID:       userID, 
        likes:        likes,
        num_of_rates: num_of_rates,
        rates_sum:    rates_sum,
        total_rate:   total_rate
        }]
    }))
  }

eachPhoto(photo, i) {   
    return (
      <div
        key={ `container${i}` }
        style = {{width: '300px', height: '300px',float: 'right', paddingTop: '40px', paddingRight: '100px'}}
      >
      <Photo
                  url = {photo.URL}
                  name = {photo.name}
                  id = {photo.photoID}
                  likes = {photo.likes}
                  rate = {photo.total_rate}
      />
      </div>
    );
}

render() {
    return (
      <div style = {{width: '1300px'}}>
        <h2 style = {{color: '#1abc9c', fontFamily: 'Francois One, sans-serif', textAlign: 'center', fontSize: '40px'}}>Most Rated</h2>
          {this.state.photos.map(this.eachPhoto)}
        <div style ={{clear: 'both'}}></div>
      </div>
    );
  }
}

export default Rated;
