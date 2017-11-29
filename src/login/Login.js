import React from 'react';
import './login.css';
import  {GetData} from '../http/Http'

const user_name_len =20;
const user_pwd_len = 16;

var  fetchData = function(com){
    GetData('https://api.github.com/user').then(function(response) {
        console.log('response', response)
        console.log('header', response.headers.get('Content-Type'))
        return response.text()
    }).then(function(text) {
        com.setState({login_content:text})
        console.log('got text', text)
    }).catch(function(ex) {
        console.log('failed', ex)
    })
}

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={user_name:'',user_pwd:'',login_content:''};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetchData(this);
    }
    handleChange(event){
        fetchData();
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
                // alert(this.state.user_pwd);
                // fetchData();
            }else {
                alert('密码必须有字母或者数字组成');
            }
        }else {
            alert('用户名必须有字母或者数字组成');
        }

    }

     render(){
        return  (<form className="App-login" onSubmit={this.handleSubmit} >
                    <input id="User-name" placeholder="用户名字"
                           maxLength={user_name_len} type="text" onChange={this.handleChange} />
                    <input id="User-password" placeholder="密码"
                           maxLength={user_pwd_len} type="password" onChange={this.handleChange} />
                    <input id="Submit" value="登陆" type="submit" />
                    <p>{this.state.login_content}</p>
        </form>);
    }
}

export default Login;