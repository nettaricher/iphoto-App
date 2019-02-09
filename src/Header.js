import React, { Component } from "react";
import { NavLink } from  "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212FD3",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
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