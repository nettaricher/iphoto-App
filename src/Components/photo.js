import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = {
        editing: true,
        likes: this.props.likes,
        rating: 0
    }
    this.put  = this.put.bind(this)
    this.renderWithRate  = this.renderWithRate.bind(this)
    this.renderWithoutRate  = this.renderWithoutRate.bind(this)
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    const url = 'https://vast-inlet-95722.herokuapp.com/addrate/'+this.props.id+'/'+nextValue;
    const options = {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
    }
    fetch(url, options).then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({editing: false})
    })
    .catch(err => { console.error(err) })
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
  renderWithRate(){
    const { rating } = this.state;
    return (
        <div>
          <img src={this.props.url} style={{height: '220px',width: "100%"}} alt={this.props.name}></img>
          <span><b>{this.state.likes}</b>&nbsp;</span><i className="far fa-thumbs-up" style = {{fontSize: '30px'}} onClick={() => {
              const url = 'https://vast-inlet-95722.herokuapp.com/addlike/'+this.props.id;
              const options = {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
            }
              fetch(url, options).then(res => res.json())
              .then(res => {
                console.log(res)
                this.setState({likes: this.state.likes+1})
              })
              .catch(err => { console.error(err) })
          }
          }></i>
          <div style={{float:'right', fontSize: '22px'}}>
            <StarRatingComponent 
              name="rate" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />{rating}
      </div>
        </div>
      );
  }
  renderWithoutRate(){
    return (
        <div>
          <img src={this.props.url} style={{height: '220px',width: "100%"}} alt={this.props.name}></img>
          <div style={{float:'right', fontSize: '22px'}}>
          
          <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={this.props.rate}
        />{this.props.rate.toFixed(2)}
          </div>
          <span><b>{this.state.likes}</b>&nbsp;</span><i className="far fa-thumbs-up" style = {{fontSize: '30px'}} onClick={() => {
              const url = 'https://vast-inlet-95722.herokuapp.com/addlike/'+this.props.id;
              const options = {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
            }
              fetch(url, options).then(res => res.json())
              .then(res => {
                console.log(res)
                this.setState({likes: this.state.likes+1})
              })
              .catch(err => { console.error(err) })
          }
          }></i>
        </div>
      );
  }
  render() {
    return this.state.editing ? this.renderWithRate() : this.renderWithoutRate()
  }
}
export default Photo;
