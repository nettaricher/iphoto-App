import React from 'react'
import {Route} from 'react-router-dom'
import mainPage from '../Components/mainPage'
import addPhoto from '../Components/addPhoto'
import profile from '../Components/profile'
import Login from '../Components/Login'
import Header from '../Header'
import Register from '../Components/register'

const ReactRouter = () => {
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/"   component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/home"     component={mainPage}/>
            <Route path="/addphoto" component={addPhoto}/>
            <Route path="/profile"  component={profile}/>
        </React.Fragment>
    )
}

export default ReactRouter