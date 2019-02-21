import React, { Component } from 'react'
import StarRatingComponent  from 'react-star-rating-component';

class myPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }

    this.renderWithoutRate  = this.renderWithoutRate.bind(this)
    this.rendernothing      = this.rendernothing.bind(this)
  }  

  renderWithoutRate(){
    return (
        <div>
            <i className="far fa-times-circle" style={{fontSize: '20px'}} onClick={() => {
            const url = 'https://vast-inlet-95722.herokuapp.com/photo/remove/'+ this.props.id;
            const options = {
                method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            }
            fetch(url, options).then(res => res.json())
            .then(res => {
                this.setState({editing:true})
            })
            .catch(err => { console.error(err) })
              }
            }></i>
            <img src={this.props.url} style={{height: '220px',width: "100%"}} alt={this.props.name}></img>
            <div style={{float:'right', fontSize: '22px'}}>
              <StarRatingComponent 
                name="rate2" 
                editing={false}
                starCount={5}
                value={this.props.rate}
              />{this.props.rate.toFixed(2)}
            </div>
            <span><b>{this.props.likes}</b>&nbsp;</span><i className="far fa-thumbs-up" style = {{fontSize: '30px'}}
            ></i>
        </div>
    );
  }

  rendernothing(){return (<span></span>)}

  render() {
    return this.state.editing ? this.rendernothing() : this.renderWithoutRate()
  }
}
export default myPhoto;
