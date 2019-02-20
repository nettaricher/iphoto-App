import React, { Component } from "react";
import { NavLink } from  "react-router-dom";
import Background from "./images/header_bg.jpg";
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: localStorage.getItem('userID'),
        }
        this.renderLogged  = this.renderLogged.bind(this)
        this.renderLogin  = this.renderLogin.bind(this)
    }  
    header = {
        position: 'relative',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: "1300px",
        height: "600px",
        fontFamily: 'Francois One, sans-serif'
    };
    logo = {
        position: 'absolute',
        top: '200px',
        left: '200px'
    };
    nav = {
        width: "1300px",
        height: "60px",
        backgroundColor: "#1edab5",
        fontFamily: 'Francois One, sans-serif',
        color: '#FFFFFF'
    };
    nav_a = {
        marginTop: '20px',
        marginLeft: '220px',
        float: 'left',
        fontWeight: 'bold'
    };
    nav_b = {
        marginTop: '20px',
        marginRight: '50px',
        float: 'right'
    };
    nonactive = {
        marginRight: '20px',
        textDecoration: 'none',
        color: '#FFFFFF'
    };
    active = {
        marginRight: '20px',
        fontWeight: 'bold'
    }
    renderLogged(){
        return(
            <div>
                <div style={this.header}>
                    <div id="logo" style={this.logo}>
                        <h1><span style={{color:'white'}}>i</span><span style={{color:'#1edab5'}}>PHOTO</span><span style={{color:'white'}}>.</span></h1>
                        <h3><span style={{color:'white'}}>Online photos album</span></h3>
                    </div>
                </div>
                <div style={this.nav}>
                    <span style={this.nav_a}>iPHOTO.</span>
                    <span style={this.nav_b}>
                        <NavLink exact to="/home" style={this.nonactive} activeStyle={this.active}>
                            HOME
                        </NavLink>
                        <NavLink exact to="/addphoto" style={this.nonactive} activeStyle={this.active}>
                            ADD PHOTO
                        </NavLink>
                        <NavLink exact to="/profile" style={this.nonactive} activeStyle={this.active}>
                            PROFILE
                        </NavLink>
                        <NavLink exact to="/" style={this.nonactive} activeStyle={this.active} onClick={()=>{
                            localStorage.clear()
                            this.setState({isAuthenticated: null})
                        }}>
                            LOGOUT
                        </NavLink>
                    </span>
                </div>
            </div>
        );
    }
    renderLogin(){
        return(
            <div>
                <div style={this.header}>
                    <div id="logo" style={this.logo}>
                        <h1><span style={{color:'white'}}>i</span><span style={{color:'#1edab5'}}>PHOTO</span><span style={{color:'white'}}>.</span></h1>
                        <h3><span style={{color:'white'}}>Online photos album</span></h3>
                    </div>
                </div>
                <div style={this.nav}>
                    <span style={this.nav_a}>iPHOTO.</span>
                    <span style={this.nav_b}>
                        <NavLink exact to="/" style={this.nonactive} activeStyle={this.active}>
                            LOGIN
                        </NavLink>
                        <NavLink exact to="/register" style={this.nonactive} activeStyle={this.active}>
                            REGISTER
                        </NavLink>
                    </span>
                </div>
            </div>
        );
    }
    render(){
        if (this.state.isAuthenticated)
            return this.renderLogged()
        else return this.renderLogin()
    }
}

export default Header