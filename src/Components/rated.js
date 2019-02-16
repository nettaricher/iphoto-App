import React, { Component } from 'react'

class Rated extends Component {
  constructor(props) {
    super(props)
    this.state = {photos: []}

    this.eachPhoto  = this.eachPhoto.bind(this)
    this.add        = this.add.bind(this)
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
        //id: id !== null ? id : this.nextID(prevState.athletes),
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

// nextID(photos = []) {
//     let max = photos.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0)
//     return ++max
// }


eachPhoto(photo, i) {   
    return (
      <div
        key={ `container${i}` }
        style = {{width: '300px', height: '300px', float: 'right', marginRight: '50px'}}
      >
        {/* <div style={ {width: '30px', height: '30px', float: 'right'} }>
            <p><b>URL:         </b>{photo.URL}</p>
            <p><b>likes array: </b>{photo.likes_array}</p>
            <p><b>rates array: </b>{photo.rates_array}</p>
            <p><b>photo id:    </b>{photo.photoID}</p>
            <p><b>name:        </b>{photo.name}</p>
            <p><b>userID:      </b>{photo.userID}</p>
            <p><b>likes:       </b>{photo.likes}</p>
            <p><b>num of rates:</b>{photo.num_of_rates}</p>
            <p><b>rates sum:   </b>{photo.rates_sum}</p>
            <p><b>total rate:  </b>{photo.total_rate}</p> */}




            <img src = {photo.URL} style={{width: '100%', height: 'auto'}} alt = {photo.name}></img>
        {/* </div> */}
      </div>
    );
}

render() {
    return (
      <div style = {{width: '1300px', height: '1296px', backgroundColor: 'pink'}}>
        <h2 style = {{color: '#1abc9c', fontFamily: 'Francois One, sans-serif', textAlign: 'center', padding: '60px', margin:'0px', fontSize: '40px'}}>Most Rated</h2>
        <div style = {{paddingTop: '40px', paddingRight: '100px'}}>
          {this.state.photos.map(this.eachPhoto)}
        </div>
        <div style ={{clear: 'both'}}></div>
      </div>
    );
  }
}

export default Rated;
