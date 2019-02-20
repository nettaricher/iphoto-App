import React from 'react'
import {Route} from 'react-router-dom'
import mainPage from '../Components/mainPage'
import addPhoto from '../Components/addPhoto'
import profile from '../Components/profile'
import Login from '../Components/Login'
import Register from '../Components/register'

const ReactRouter = () => {
    return (
        <React.Fragment>
            <Route exact path="/2018-2019/dcs/dev_275/"   component={Login}/>
            <Route path="/2018-2019/dcs/dev_275/register" component={Register}/>
            <Route path="/2018-2019/dcs/dev_275/home"     component={mainPage}/>
            <Route path="/2018-2019/dcs/dev_275/addphoto" component={addPhoto}/>
            <Route path="/2018-2019/dcs/dev_275/profile"  component={profile}/>
        </React.Fragment>
    )
}

export default ReactRouter