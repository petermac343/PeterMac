import React, { useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import TypingEffect from './Tester'
import Dropdown from './Dropdown'
import LikeDislike from './LikeDislike'


const Section =styled.div`
    height: 100%;
    background-color: #eafcfc;
    display: flex;
    @media (max-width: 768px) {
    flex-direction: column;
  } 
`
const Left =styled.div`

flex:1;
align-items: center;
display: flex;
justify-content: center;
@media (max-width: 768px) {
    flex-direction: column;
  } 
@media (max-width: 960px) {
    
  } 

`
const Img = styled.div`
  border-radius: 50%;
  width: 80vh;
  background-color: #549bab;
  display: flex;
  align-items: center;
  justify-content: center; 
  @media (max-width: 768px) {
    width: 20vh;
  } 
  @media (max-width: 960px) {
    width: 35vh;
  } 
`
const Man =styled.img`
  
    width: 80vh;
    height: 80vh;
    overflow: hidden;
    @media (max-width: 768px) {
    width: 20vh;
    height: 20vh;
  } 
    @media (max-width: 960px) {
    width: 35vh;
    height: 35vh;
  } 
`
const Right =styled.div`
flex: 1;
position: relative;
a{
  bottom: 10px;
  position: absolute;
  left: 40%;
}
@keyframes arrowBlink {
  100%{
    opacity: 0;
  }
}
@media (max-width: 768px) {
  
} 
`
const Wrapper =styled.div`
  width: 100%;height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 60px;
    margin: 10px 0px;
  }
  h2{
    font-size: 35px;
  }
  h3{
    font-size: 30px;
  }
  span{
    color: #044fff;
  }
  @media (max-width: 768px) {
    
    h2{
      font-size: 20px;
    }
    
  } 
  `
  const Tags =styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 960px){
      gap: 15px;
    }
    `
    const pulseAnimation = keyframes`
 0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
  
    `;
  const Icon =styled.div`
    border-radius: 50%;
    width: 6vh;
    object-fit: cover;
    margin-top: 8px;
    animation: ${pulseAnimation} 5s infinite;
    /* background-color: #d22380; */
    @media (max-width: 768px)  {
      width: 5vh;
      margin-top: 0;
    }
    @media (max-width: 960px)  {
      width: 5vh;
    }
    `
  const Skill =styled.img`
    height: 6vh;
    width: 6vh;
    @media (max-width: 768px)  {
      width: 5vh;
      height: 5vh;
    }
    @media (max-width: 960px)  {
      width: 5vh;
      height: 5vh;
    }
  `

const Down = styled.img`
  width: 30px;
  opacity: 1;
`;
const Intro = () => {
    const strings = ['Developer', 'Designer','Creator'];
  return (
    <Section id='intro'>
      <Left>
        <Img>
        <Man src="/2best.jpg"/>
        </Img>
      </Left>
      <Right>
        {/* <Dropdown/> */}
        <Wrapper>
          <h2>Hi, My Name is</h2>
          <h1>Peter Macharia</h1>
          <h3>Freelance <TypingEffect strings={strings} speed={100} pause={1000} /></h3>
        <Tags>
          <Icon>
          <Skill src="/wordpress.svg"/>
        </Icon>
        <Icon>
          <Skill src="/html.svg"/>
        </Icon>
        <Icon>
          <Skill src="/css.svg"/>
        </Icon>
        <Icon>
          <Skill src="/react.svg"/>
        </Icon>
        <Icon>
          <Skill src="/js.svg"/>
        </Icon>
        </Tags>

        <LikeDislike/>
        </Wrapper>
        <a href="#works">
          <Down src='/down.png'/>
        </a>


      </Right>
    </Section>
  )
}

export default Intro