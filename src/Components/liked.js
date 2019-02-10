import React, { Component } from 'react'


class Liked extends Component {
  constructor(props) {
    super(props)
    this.state = {photos: []}

    this.eachPhoto  = this.eachPhoto.bind(this)
    this.add        = this.add.bind(this)
  }

  componentDidMount() {
    const url = 'https://iphoto-app.herokuapp.com/photo/sortbylikes';
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
        style = {{width: '300px', height: '300px', float: 'right', marginRight: '32px'}}
      >
          <img src = {photo.URL} style={{width: '100%', height: 'auto'}} alt = {photo.name}></img>
      </div>
    );
}

  render() {
    return (
      <div style = {{width: '1300px', height: '1296px', backgroundColor: '#eeeeee'}}>
        <h2 style = {{color: '#1abc9c', fontFamily: 'ariel', textAlign: 'center', padding: '20px', fontSize: '30px'}}>Most liked</h2>
        <div style = {{paddingTop: '40px', paddingRight: '60px'}}>
          {this.state.photos.map(this.eachPhoto)}
        </div>
        <div style ={{clear: 'both'}}></div>
      </div>
    );
  }
}

export default Liked;
