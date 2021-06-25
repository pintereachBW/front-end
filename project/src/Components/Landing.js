import React, { Component } from 'react'
import Card from './Card'
import styled from 'styled-components'
import axios from 'axios'

export default class Landing extends Component {

    /*componentDidMount(e){
        
        const token = localStorage.getItem('token')
        axios.get('https://unit4buildwk.herokuapp.com/api/articles/:user_id', {
            headers: {
                authorization: token
            }
        })
        .then(res=>{
           console.log('Articles Get',res); //does get the data
           
        })
        .catch(err=>{
            console.log(err);
        },[])also cant get this request to work either...
    }*/

    render() {
        return(
            <div>
            <h1>Articles</h1>
            <ArticleContainer>
            <Card />
            </ArticleContainer>
            </div>
        )
    }
}

const ArticleContainer = styled.div`
display: flex;
flex-flow:row wrap;
border:1px white solid;
margin:auto;
width:94%;
height:100vh;
`