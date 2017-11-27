import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <p className="App-login">

              <input id="User-name" placeholder="用户名字"
                     maxLength={user_name_len}　type="text"></input>
              <input id="User-password" placeholder="密码"
                     maxLength={user_pwd_len} type="password"></input>
              <input id="Submit" value="登陆" type="submit" action="form" name="提交"/>

          </p>
      </div>
    );
  }
}

export default App;
