import React from 'react';
import './login.css';
const user_name_len =20;
const user_pwd_len = 16;

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={user_name:'',user_pwd:''};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target);
        if (event.target.id === 'User-name'){
            this.setState({user_name:event.target.value}) ;
        }else if (event.target.id === 'User-password'){
            this.setState({user_pwd:event.target.value}) ;
        }

    }
    handleSubmit(){
       alert(this.state.user_pwd);
    }

     render(){
        return  (<form className="App-login" onSubmit={this.handleSubmit} >
                    <input id="User-name" placeholder="用户名字"
                           maxLength={user_name_len} type="text" onChange={this.handleChange} />
                    <input id="User-password" placeholder="密码"
                           maxLength={user_pwd_len} type="password" onChange={this.handleChange} />
                    <input id="Submit" value="登陆" type="submit" />

        </form>);
    }
}

export default Login;