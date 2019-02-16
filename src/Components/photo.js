import React, { Component } from 'react'

class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = {
        rating: 0
    }
  }

  changeRating( newRating ) {
    this.setState({
      rating: newRating
    });
}
put() {
    const url = 'https://vast-inlet-95722.herokuapp.com/addlike/';
    const options = {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
  }
    fetch(url, options).then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => { console.error(err) })
}
render() {
    return (
      <div>
        <img src={this.props.url} style={{height: '220px',width: "100%"}} alt={this.props.name}></img>
        <div style={{float:'right', fontSize: '22px'}}>
        <label>1<input type="radio" name="rating" value="1" onClick={() => {
            const url = 'https://vast-inlet-95722.herokuapp.com/addrate/'+this.props.id+'/1';
            const options = {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
          }
            fetch(url, options).then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => { console.error(err) })
        }}>
        </input></label>
        <label>2<input type="radio" name="rating" value="2" onClick={() => {
            const url = 'https://vast-inlet-95722.herokuapp.com/addrate/'+this.props.id+'/2';
            const options = {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
          }
            fetch(url, options).then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => { console.error(err) })
        }}>
        </input></label>
        <label>3<input type="radio" name="rating" value="3" onClick={() => {
            const url = 'https://vast-inlet-95722.herokuapp.com/addrate/'+this.props.id+'/3';
            const options = {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
          }
            fetch(url, options).then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => { console.error(err) })
        }}>
        </input></label>
        <label>4<input type="radio" name="rating" value="4" onClick={() => {
            const url = 'https://vast-inlet-95722.herokuapp.com/addrate/'+this.props.id+'/4';
            const options = {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
          }
            fetch(url, options).then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => { console.error(err) })
        }}>
        </input></label>
        <label>5<input type="radio" name="rating" value="5" onClick={() => {
            const url = 'https://vast-inlet-95722.herokuapp.com/addrate/'+this.props.id+'/5';
            const options = {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
          }
            fetch(url, options).then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => { console.error(err) })
        }}>
        </input></label>
        </div>
        <span><b>{this.props.likes}</b>&nbsp;</span><i className="far fa-thumbs-up" style = {{fontSize: '30px'}} onClick={() => {
            const url = 'https://vast-inlet-95722.herokuapp.com/addlike/'+this.props.id;
            const options = {
              method: "PUT", // *GET, POST, PUT, DELETE, etc.
          }
            fetch(url, options).then(res => res.json())
            .then(res => {
              console.log(res)
            })
            .catch(err => { console.error(err) })
        }
        }></i>
      </div>
    );
  }
}

export default Photo;
