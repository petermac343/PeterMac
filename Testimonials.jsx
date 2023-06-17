import React from 'react'
import styled from 'styled-components'
const Section =styled.div`
    height: 100%;
    background-color: #b8e1fb;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 50px;

    }
`
const Container =styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    flex-direction: column;
    height: 90%;
  } 
`
const Card =styled.div`
height: 70%;
width: 250px;
border-radius: 10px;
box-shadow: 0px 0px 15px -8px black;
display: flex;
margin: 0 30px;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 20px;
transition: all 1s ease;

&:hover{
  transform: scale(1.1);
  margin: 0 10px;
}
@media (max-width: 768px) {
    padding: 10px;
    height: 25%;
  } 
@media (max-width: 960px) {
    padding: 10px;
    height: 25%;
  } 
`
const Top =styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
    display: none;
  } 
`
const Arrow =styled.img`
height: 25px;
`
const Profile =styled.img`
height: 60px;
width: 60px;
border-radius: 50%;
margin: 0 30px;
`
const Social =styled.img`
height: 25px;
`
const Center =styled.div`
padding: 10px;
background-color: #faeae1;
border-radius: 10px;

`
const Bottom =styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h3{
  margin-bottom: 5px;
}
h4{
  color: #7a7877;
}
`
const Testimonials = () => {
  const data = [
    {
        id: 1,
        name: "Jamo",
        title: "Junior Dev",
        img: "/liam.png",
        icon: "/youtube.png",
        desc: "Lorem ipsum coldor plus sit let me de clar fele ad cele",
    },
    {
      id: 2,
      name: "Gathee",
      title: "Twitter",
      img: "/liam.png",
      icon: "/youtube.png",
      desc: "Lorem ipsum coldor plus sit let me de clar fele ad cele"
      
    },
    {
        id: 3,
        name: "Liam",
        title: "CEO of Likey",
        img: "/liam.png",
        icon: "/youtube.png",
        desc: "Lorem ipsum coldor plus sit let me de clar fele ad cele"
    
    },
    ];
  return (
    <Section id='testimonials'>
     <h1>Testimonials</h1>
     <Container>
      {data.map(p=>(
        <Card key={p.id}>
      <Top>
        <Arrow src='/right.png'/>
        <Profile src={p.img}/>
        <Social src={p.icon}/>
      </Top>
      <Center>
        <p> {p.desc}</p>
      </Center>
      <Bottom>
        <h3>{p.name}</h3>
        <h4>{p.title}</h4>
      </Bottom>
      </Card> 
       ))}
     </Container> 
     
    
    </Section>
  )
}

export default Testimonials