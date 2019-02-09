import React, { Component } from "react";
import { NavLink } from  "react-router-dom";
import Background from "./images/header_bg.jpg"
class Header extends Component {
    active = {
        backgroundColor: "#212FD3",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: "1300px",
        height: "600px"
    };
    render(){
        return(
            <div style={this.header}>
                {/* <NavLink exact to="/" activeStyle={this.active}>
                    Home
                </NavLink>
                <NavLink exact to="/addTour" activeStyle={this.active}>
                    Add Tournament To Athlete
                </NavLink>
                <NavLink exact to="/getBySportYear" activeStyle={this.active}>
                    Find Athletes by Sport and Year
                </NavLink> */}
                header
            </div>
        );
    }
}

export default Header