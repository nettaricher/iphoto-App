import React from 'react'
import {Route} from 'react-router-dom'
import mainPage from '../Components/mainPage'
import addPhoto from '../Components/addPhoto'
import Header from '../Header'

const ReactRouter = () => {
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={mainPage}/>
            <Route path="/addPhoto" component={addPhoto}/>
        </React.Fragment>
    )
}

export default ReactRouter