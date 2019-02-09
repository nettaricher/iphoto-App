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
        likes_array = likes_array,
        rates_array = rates_array,
        photoID     = photoID,
        name        = name, 
        URL         = URL, 
        userID      = userID, 
        likes       = likes,
        num_of_rates= num_of_rates,
        rates_sum   = rates_sum,
        total_rate  = total_rate
        }]
    }))
}

nextID(photos = []) {
    let max = photos.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0)
    return ++max
}

eachPhoto(photo, i) {   
    return (
      <div>
        <div style={ {width: '440px', border: '2px solid'} }>
            <h2 style={ {background: '#E3E5E7',textAlign: 'center'} }>{ athlete.name } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ID: { athlete.id })</h2>
            <p><b>Sport: </b>{ athlete.sport }</p>
            <p><b>Date Of Birth: </b>{ dateOfBirth.getDate() }/{ dateOfBirth.getMonth() }/{ dateOfBirth.getFullYear() }</p>
            <p><b>Gender: </b>{ athlete.gender }</p>
            <hr></hr>
            <div className="wrapper3">
            <h4>Participates in tournaments:</h4>
              { athlete.tours.map(this.eachTour) }
            </div>
        </div>
      </div>
    );
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

//hii sagishul
