import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import {Button, Form} from 'react-bootstrap'

import './login.css';

class Login extends Component{

    state = {
        username : "",
        password : "",
        isLoggedIn : false
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    //set the token and target values mapped name to val like username and password based on names
    onSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        if(username==='admin' && password==='admin'){
            localStorage.setItem('token','adassdasd');
            this.setState({
                isLoggedIn : true
            })
        }
    }

    

    render(){

        if(this.state.isLoggedIn){
            return <Redirect to="/starwars"/>
        }

        return (
            <div className="loginMain">
                <div className="loginContainer">
                    <h2>Login to Star Wars info</h2>
                    <form onSubmit={this.onSubmit}>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="Enter Username"/>
                        <br/>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Enter Password"/>
                        <br/>
                        <Button type="submit" variant="outline-primary">Login</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;