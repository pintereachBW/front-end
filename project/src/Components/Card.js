import React, { Component } from 'react'
import '../Card.css'
import styled from 'styled-components'

export default class Card extends Component {

    state = {
        CardInfo:{
            title:'',
            url:'',
            description:'',
        }
    }

    handleChange = e => {
        this.setState({
            CardInfo:{
                ...this.state.CardInfo,
                [e.target.name]: e.target.value
            }
        });
    }

    render(){
    return(
        <div className='card-container'>
            <form>
                <Input 
                    placeholder='Title'
                    type="text"
                    name="title"
                    value={this.state.CardInfo.title}
                    onChange={this.handleChange}/>
                <Input 
                    placeholder='Article Link'
                    type="url"
                    name="url"
                    value={this.state.CardInfo.url}
                    onChange={this.handleChange}/>
                <TextArea 
                    placeholder='Give a description of your article!'
                    type="text"
                    name="description"
                    value={this.state.CardInfo.description}
                    onChange={this.handleChange}/>
            </form>
            <Button>Save</Button>
            <Button>Clear</Button>
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