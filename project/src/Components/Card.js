import React, { Component } from 'react'
import '../Card.css'
import styled from 'styled-components'
import axios from 'axios'

export default class Card extends Component {

    state = {
        articles:{
            article_id:Number,
            title:'',
            link:'',
            description:'',
        }
    }


    handleSubmit = e => {
        const token = localStorage.getItem('token')
        e.preventDefault();
        axios.post('https://unit4buildwk.herokuapp.com/api/articles/:user_id/add', this.state.articles, {
            headers: {
                authorization: token
            }})
        .then(res=>{
           console.log(res)
        })
        .catch(err=>{
            console.log(err);
        },[])
    }

    handleChange = e => {
        this.setState({
            articles:{
                ...this.state.articles,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
    return(
        <div className='card-container'>
            <form onSubmit={this.handleSubmit}>
                <Input 
                    placeholder='Title'
                    type="text"
                    name="title"
                    value={this.state.articles.title}
                    onChange={this.handleChange}/>
                <Input 
                    placeholder='Article Link'
                    type="url"
                    name="link"
                    value={this.state.articles.link}
                    onChange={this.handleChange}/>
                <TextArea 
                    placeholder='Give a description of your article!'
                    type="text"
                    name="description"
                    value={this.state.articles.description}
                    onChange={this.handleChange}/>
                    <Button>Save</Button>
                    <Button>Clear</Button>
            </form>
            
            
        </div>
    )
}
}

const Input = styled.input`
margin: 1rem;
width: 80%;
text-align:center;
`
const TextArea = styled.textarea`
margin: 1rem;
width: 80%;
height:300px;
max-width: 80%;
max-height:300px;
text-align:left;
`
const Button = styled.button`
background-color: white;
color:#424c55;
width: 110px;
height: 35px;
border-radius:50px;
font-size: 1.2rem;
font-weight: 500;
letter-spacing:2px;
cursor: pointer;
margin-left:5%;
margin-right:5%;
`