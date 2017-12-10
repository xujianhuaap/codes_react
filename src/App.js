import React, { Component } from 'react';
import './index/Home.css';
import {Route,HashRouter} from 'react-router-dom'
import LoginSuccess from './login/LoginSuccess'
import Login from './login/Login'
import Home from './index/Home'
import Blog from'./blog/Blog'
var RegexLogin = function () {
    return <Login regex={/^[a-z]|[A-Z]|[0-9]{8,16}$/}/>;
}

class App extends Component {

  render() {
    return (
     <HashRouter  basename="/" >
         <div className="App">
             <Route exact = 'true' path="/" component={Home}/>
             <Route exact='true' path="/login" component={RegexLogin}> </Route>
             <Route exact= 'true' path="/login/success" component={LoginSuccess} />
             <Route exact='true' path='/blog/blog' component={Blog}/>
         </div>
     </ HashRouter>
    );
  }
}

export default App;
