import React, { Component } from 'react'
import Card from './Card'
import styled from 'styled-components'

export default class Landing extends Component {
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