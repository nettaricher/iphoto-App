import React, { Component } from 'react'
import Header from '../Header'
import axios from 'axios';
const BASE_URL = 'https://vast-inlet-95722.herokuapp.com/';

class Photo extends Component
{
  constructor(props) {
    super(props)
    this.state =  { 
                    editing: true,
                    url: '', name: '',
                    images: [],
                    imageUrls: [],
                    message: ''
    }
    this.selectFiles = this.selectFiles.bind(this);
  }

  selectFiles = (event) => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({images, message })
}


uploadImages = () => { 
  const uploaders = this.state.images.map(image => {
  const data = new FormData();
  data.append("image", image, image.name);
   
  // Make an AJAX upload request using Axios
  return axios.post(BASE_URL + 'upload', data)
  .then(response => {
  this.setState({
  imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
  });
  })
  });
   
  // Once all the files are uploaded 
  axios.all(uploaders).then(() => {
  console.log('done');
  console.log(this.state.imageUrls)
  const obj = {   name: this.refs.name.value,
                  URL: BASE_URL + this.state.imageUrls[0],
                  userID: localStorage.getItem('userID')
  }
  const url = BASE_URL+'photo';
  const options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify(obj)
}
  fetch(url, options).then(res => res.json())
  .then(res => {
    console.log(res)
    this.props.history.push("/profile");
  })
  .catch(err => { console.error(err) })
  }).catch(err => alert(err.message));
  }

  render(){
    return(
      <div>
        <Header/>
        <div>
	        	<br/>
	        	<div style = {{textAlign: 'center'}}>
        			<h1>Image Uploader</h1>
	        		<div>
                <label>Name: <input type="text" name='name' ref='name'/></label>
		        		<input type="file" onChange={this.selectFiles} multiple/>
		        	</div>
		        	{ this.state.message? <p>{this.state.message}</p>: ''}
		        	<br/><br/><br/>
		        	<div>
		            	<button value="Submit" onClick={this.uploadImages}>Submit</button>
		        	</div>
	            </div>
	            <br/>
		    </div>
        </div>
    )
  }
}
export default Photo