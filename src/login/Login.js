import React from 'react';
import './login.css';
import  {GetData} from '../http/Http'
import {Redirect}  from 'react-router-dom'

const user_name_len =20;
const user_pwd_len = 16;

var  fetchData = function(com){
    GetData('http://skullmind.cn/api/login').then(function(response) {
        console.log('response', response)
        console.log('header', response.headers.get('Content-Type'))
        return response.text();
    }).then(function(text) {
        com.setState({login_success:true});
    }).catch(function(ex) {
        console.log('failed', ex)
    })
}

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={user_name:'',user_pwd:'',login_success:false};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){

    }
    handleChange(event){
        console.log(event.target);
        if (event.target.id === 'User-name'){
            var value = event.target.value;
            this.setState({user_name:value}) ;


        }else if (event.target.id === 'User-password'){
            this.setState({user_pwd:event.target.value}) ;
        }

    }
    handleSubmit(){
        var regex = this.props.regex;
        var userName = this.state.user_name;
        var userPwd = this.state.user_pwd;
        console.log(regex);
        if (regex.test(userName)){
            if (regex.test(userPwd)){
                fetchData(this);
            }else {
                alert('密码必须有字母或者数字组成');
            }
        }else {
            alert('用户名必须有字母或者数字组成');
        }

    }

     render(){
        if (this.state.login_success){
            return <Redirect push to = '/login/success'/>
        }
        return  (<div>
            <div className="Title"> 铭之力量</div>
            <form className="App-login" onSubmit={this.handleSubmit} >
                    <input id="User-name" placeholder="用户名字"
                           maxLength={user_name_len} type="text" onChange={this.handleChange} />
                    <input id="User-password" placeholder="密码"
                           maxLength={user_pwd_len} type="password" onChange={this.handleChange} />
                    <input id="Submit" value="登陆" type="submit" />
            </form>
        </div>);
    }
}

export default Login;