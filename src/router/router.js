import React from 'react'
import {Route} from 'react-router-dom'
import mainPage from '../Components/mainPage'
import addPhoto from '../Components/addPhoto'
import Login from '../Components/Login'
import Header from '../Header'

const ReactRouter = () => {
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={mainPage}/>
            <Route path="/addPhoto" component={addPhoto}/>
            <Route path="/Login" component={Login}/>
        </React.Fragment>
    )
}

export default ReactRouter