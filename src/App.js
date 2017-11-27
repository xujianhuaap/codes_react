import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import LoginSuccess from './login/LoginSuccess'
import Login from './login/Login'
var user_name_len =20;
var user_pwd_len = 16;
class App extends Component {
  render() {
    return (
      <div className="App">
          <title> skｕll mind</title>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to SkullMind</h1>
        </header>
        <p className="App-intro">
          逝者如斯，不舍昼夜。
        </p>
          <Route path="/login" component={Login}> </Route>
          <Route path="/login/success" component={LoginSuccess}/>
      </div>
    );
  }
}

export default App;
