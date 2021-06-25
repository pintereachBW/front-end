import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default class SignUp extends Component {

    state = {
        userSignUpInfo:{
            user_id:Number,
            username:'',
            password:'',
        }
    }

    handleChange = e => {
        this.setState({
            userSignUpInfo:{
                ...this.state.userSignUpInfo,
                [e.target.name]: e.target.value
            }
        });
    }
    
    signUp = e => {
        e.preventDefault();
        axios.post('https://unit4buildwk.herokuapp.com/api/auth/register', this.state.userSignUpInfo)
        .then(res=>{
           //console.log('New User',res); //does get the data
            localStorage.setItem("token", res.data.password);
            this.props.history.push('/')
        })
        .catch(err=>{
            console.log(err);
        },[])
    }


    render() {
        return(
            <div>
            <h1>Sign-Up</h1>
            <Form onSubmit={this.signUp}>
                <Input 
                    placeholder='Username'
                    type="text"
                    name="username"
                    value={this.state.userSignUpInfo.username}
                    onChange={this.handleChange}
                />
                <Input 
                    placeholder='Password'
                    type="password"
                    name="password"
                    value={this.state.userSignUpInfo.password}
                    onChange={this.handleChange}
                />
                <button>Sign-Up!</button>
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