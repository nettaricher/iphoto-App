import React, { Component } from "react";
import Background from "../images/base.png"

class Team extends Component {
    header = {
        position: 'relative',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: "1300px",
        height: "1000px",
        fontFamily: 'Francois One, sans-serif'
    };
    headline = {
        color: 'white',
        textAlign: 'center',
        padding: '60px',
        fontSize: '40px'
    };
    person1 = {
        width: '100%',
        height: 'auto',
        left: '100px',
        position: 'absolute',
        width: '100px',
        height: '100px'
    };

    render(){
        return(
            <div>
                <div style = {this.header}>
                    <h2 style = {this.headline}>MEET OUR TEAM</h2>
                    {/* <div style ={{width: '100px', height: '100px'}}> */}
                    <img src = "../images/team1.jpg" style = {this.person1}></img>
                    </div>
                </div>
            // </div>
        );
    }
}

export default Team