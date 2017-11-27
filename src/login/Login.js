import React,{ Component } from 'react';
import './login.css';
import { BrowserRouter } from 'react-router-dom';
const user_name_len =20;
const user_pwd_len = 16;
class Login extends Component{

     render(){
        return  (<p className="App-login">
            <form onSubmit={Login.handleSubmit}>
                <input id="User-name" placeholder="用户名字"
    maxLength={user_name_len} type="text"/>
                <input id="User-password" placeholder="密码"
    maxLength={user_pwd_len} type="password"/>
                <input id="Submit" value="登陆" type="submit"/>
            </form>

        </p>);
    }
}

export default Login;