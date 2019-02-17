import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Rating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        {rating}
        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
export default Rating