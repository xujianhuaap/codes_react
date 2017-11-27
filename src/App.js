import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import LoginSuccess from './login/LoginSuccess'
import Login from './login/Login'
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
          <Route exact='true' path="/login" component={Login}> </Route>
          <Route exact= 'true' path="/login/success" component={LoginSuccess}/>
      </div>
    );
  }
}

export default App;
