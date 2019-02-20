import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Photo extends Component {
  constructor(props) {
    super(props)
    this.state = {
        editing: true,
        likes: this.props.likes,
        rating: this.props.rate
    }
    this.renderWithRate  = this.renderWithRate.bind(this)
    this.renderWithoutRate  = this.renderWithoutRate.bind(this)
  }
  onStarClick(nextValue, prevValue, name) {
    const url = 'https://vast-inlet-95722.herokuapp.com/addrate/'+this.props.id+'/'+nextValue+'/'+localStorage.getItem('userID')+'/'+localStorage.getItem('group');
    const options = {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
    }
    fetch(url, options).then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({editing: false})
      this.setState({rating: (nextValue+this.props.rates_sum)/ (this.props.num_of_rates+1)});
    })
    .catch(err => { console.error(err) })
  }
  
  renderWithRate(){
    return (
        <div>
          <img src={this.props.url} style={{height: '220px',width: "100%"}} alt={this.props.name}></img>
          <span><b>{this.state.likes}</b>&nbsp;</span><i className="far fa-thumbs-up" style = {{fontSize: '30px'}} onClick={() => {
              const url = 'https://vast-inlet-95722.herokuapp.com/addlike/'+this.props.id+'/'+localStorage.getItem('userID');
              const options = {
                method: "PUT", // *GET, POST, PUT, DELETE, etc.
            }
              fetch(url, options).then(res => res.json())
              .then(res => {
                console.log(res)
                this.setState({likes: this.state.likes+1})
              })
              .catch(err => { 
                console.log(localStorage.getItem('userID'))
                console.error(err) })
          }
          }></i>
          <div style={{float:'right', fontSize: '22px'}}>
            <StarRatingComponent 
              name={`rate${this.props.id}`}
              starCount={5}
              value={this.state.rating}
              onStarClick={this.onStarClick.bind(this)}
            />{this.state.rating}
          </div>
          <div style={{color:'#e2a004',float:'right', fontSize: '15px', fontWeight:'bold', paddingTop:'5px'}}>Rate ></div>
        </div>
      );
  }
  renderWithoutRate(){
    return (
        <div>
          <img src={this.props.url} style={{height: '220px',width: "100%"}} alt={this.props.name}></img>
          <div style={{float:'right', fontSize: '22px'}}>
          
          <StarRatingComponent 
          name={`rate${this.props.id}`}
          editing={false}
          starCount={5}
          value={this.state.rating}
        />{this.state.rating.toFixed(2)}
          </div>
          <span><b>{this.state.likes}</b>&nbsp;</span><i className="far fa-thumbs-up" style = {{fontSize: '30px'}} onClick={() => {
              const url = 'https://vast-inlet-95722.herokuapp.com/addlike/'+this.props.id+'/'+localStorage.getItem('userID');
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
    if (this.props.withRate)
      return this.renderWithRate()
    else return this.renderWithoutRate()
  }
}
export default Photo;
