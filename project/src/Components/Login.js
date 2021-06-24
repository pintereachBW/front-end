import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class Login extends Component {

    state = {
        userInfo:{
            username:'garin',
            password:'password',
        }
    }

    handleChange = e => {
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    }
    
    login = e => {
        e.preventDefault();
        axios.post('https://unit4buildwk.herokuapp.com/api/auth/login', this.state.userInfo)
        .then(res=>{
           //console.log('TOKEN POST',res.data.token); //does get the data
            localStorage.setItem("token", res.data.token);
            this.props.history.push('/')
        })
        .catch(err=>{
            console.log(err);
        },[])
    }

    render() {
        return(
            <div>
            <h1>Login</h1>
            <Form onSubmit={this.login}>
                <Input 
                    placeholder='Username'
                    type="text"
                    name="username"
                    value={this.state.userInfo.username}
                    onChange={this.handleChange}
                />
                <Input 
                    placeholder='Password'
                    type="password"
                    name="password"
                    value={this.state.userInfo.password}
                    onChange={this.handleChange}
                />
                <button>Login</button>
            </Form>
            </div>
        )
    }
}

const Form = styled.form`
display: flex;
flex-flow: column wrap;
margin: auto;
align-items: center;
background-color: #5a5a5a;
width: 40%;
border-radius: 60px;
padding:1%;
`
const Input = styled.input`
margin: 1rem;
width: 28%;
text-align:center;
`