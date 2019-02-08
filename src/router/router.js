import React from 'react'
import {Route} from 'react-router-dom'
import mainPage from '../Components/mainPage'
import Header from '../Header'

const ReactRouter = () => {
    return (
        <React.Fragment>
            <Header/>
            <Route exact path="/" component={mainPage}/>
        </React.Fragment>
    )
}

export default ReactRouter