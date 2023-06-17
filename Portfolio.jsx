import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Port from './port'
import {
  Featured,
  Web,
  Mobile,
  Branding,
  Design,
} from './data'


const Container =styled.div`
background-color: #eafcfc;
height: 100%;
display: flex;
flex-direction: column;
align-items:center ;
/* @media (max-width: 768px) {
    width: 100%;
  }  */
`
const Title =styled.h1`
font-size: 50px;
@media (max-width: 768px) {
    font-size: 100px;
  }
@media (max-width: 960px) {
    font-size: 30px;
  }
`
const List =styled.ul`
margin: 10px;
padding: 0;
display: flex;
list-style: none;
@media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 20px;
  }
`

const Display =styled.div`
display: flex;
width: 70%;
align-items: center;
justify-content: center;
flex-wrap: wrap;
@media (max-width: 768px) {
    width: 100%;
  }
`
const Item =styled.div`
height: 150px;
width: 220px;
border-radius: 20px;
border: 1px solid lightgray;
margin: 10px 12px;
display: flex;
align-items: center;
justify-content: center;
color: white;
position: relative;
transition: all 1s ease;
h3{
font-size: 20px;
position: absolute;
}
&:hover{
    background-color: #0c253aa0;
}
@media (max-width: 768px) {
    width: 130px;
    height: 100px;
  }
`
const Img =styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  &:hover{
    opacity: 0.4;
    z-index: 0;
  }

`


const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
 
  const list = [
    {
      id:"featured",
      title: "Featured",
    },
    {
      id:"web",
      title: "Web Designs",
    },
    {
      id:"mobile",
      title: "Full Websites",
    },
    // {
    //   id:"branding",
    //   title: "Branding",
    // },
    {
      id:"designs",
      title: "Designs",
    },
  ];
  useEffect(()=>{
    switch(selected){
      case "featured":
      setData(Featured);
      break;
      case "web":
      setData(Web);
      break;
      case "mobile":
      setData(Mobile);
      break;
      case "branding":
      setData(Branding);
      break;
      case "designs":
      setData(Design);
      break;

      default:
        setData(Featured);
    }

  },[selected])
  return (
    <Container id='portfolio'>
      <Title>Portfolio</Title>
      <List>
        {list.map(item=>(
          <Port 
          key={item.id}
          title={item.title} 
          active={selected == item.id} 
          setSelected={setSelected}
          id={item.id}/>
        ))}
      </List>
      <Display>
          {data.map(d=>(
        <Item key={d.id}>
            <Img src={d.img}/>
          <h3>{d.title}</h3>
        </Item>
          ))}
      </Display>
    </Container>
  )
}

export default Portfolio