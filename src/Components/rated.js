import React, { Component } from 'react'

class Rated extends Component {
  constructor(props) {
    super(props)
    this.state = { photos: [] }

  }
componentDidMount() {
    const url = 'https://iphoto-app.herokuapp.com/photo/sortbyrate';
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
        }]
    }))
  }

render() {
    return (
      <div>
          Rated
          {this.state.photos.map(this.eachPhoto)}
      </div>
    );
  }
}

export default Rated;
