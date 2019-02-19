import React, { Component } from 'react'
import Myphoto from './myphoto'
import Header from '../Header'
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        userID: localStorage.getItem('userID'),
        name: null,
        email: null,
        photos: []
    }
    this.eachPhoto  = this.eachPhoto.bind(this)
    this.add        = this.add.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }
  
componentDidMount() {
    const url = 'https://vast-inlet-95722.herokuapp.com/user/' + this.state.userID;
    fetch(url)
    .then(res => res.json())
    .then(data => { 
        this.setState({name: data[0].name})
        this.setState({email: data[0].email})
        // console.log(name, email, password, group)
        
        for(let i=1; i<data.length; i++)
        {
            this.add(
                {
                    likes_array:  data[i].likes_array, 
                    rates_array:  data[i].rates_array, 
                    photoID:      data[i].photoID,
                    name:         data[i].name,
                    URL:          data[i].URL,
                    userID:       data[i].userID,
                    likes:        data[i].likes,
                    num_of_rates: data[i].num_of_rates,
                    rates_sum:    data[i].rates_sum,
                    total_rate:   data[i].total_rate
                }
            )
        }
    })
    .catch(err => console.error(err))
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
 removeItem(index) {
    this.setState({
      photos: this.state.photos.filter((_, i) => i !== index)
    });
}
 eachPhoto(photo, i) { 
     return (
      <div
        key={ `container${i}` }
        style = {{width: '300px', height: '300px',float: 'right', paddingTop: '40px', paddingRight: '100px'}}
      >
        <Myphoto 
          url = {photo.URL}
          name = {photo.name}
          id = {photo.photoID}
          likes = {photo.likes}
          rate = {photo.total_rate}
          />
      </div>
    )
 }

render() {
    return (
        <div>
          <Header/>
            <div style = {{textAlign: 'center'}}>
                <h1>{this.state.name}</h1>
                <h2>{this.state.email}</h2>
            </div>
            <div>
                {this.state.photos.map(this.eachPhoto)}
            </div>
        </div>
    )
  }
}

export default Profile
