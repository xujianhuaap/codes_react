/**
 * Created by xujianhua on 01/12/17.
 */
import React from 'react'
import './Home.css'
import logo from '../logo.svg';
import {Link} from'react-router-dom'

class Home extends React.Component{
    render(){
        return <div>
            <title> skｕll mind</title>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to SkullMind</h1>
            </header>
            <p className="App-intro">
                <div>逝者如斯，不舍昼夜。</div>
                <div className="Login-Link"><Link   to="/login">登 陆</Link></div>
            </p>
        </div>
    }
}

export default Home;