import React, { useState } from 'react'
import styled from 'styled-components'
const Section =styled.div`
    height: 100%;
    background-color: #65e1e1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    `

const Slider =styled.div`
    height: 350px;
    left : 0;
    display: flex;
    position: absolute;
    @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

`
const Container =styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Item =styled.div`
  width: 700px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 180px;
    width: 90%;
    margin: 5px 0px;
  }
`
const Left =styled.div`
  flex: 4;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100%;
  }

`
const LeftContainer =styled.div`
height: 70%;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
h2{
  font-size: 20px;
  @media (max-width: 768px) {
font-size: 15px;
  }
}
p{
  font-size: 13px;
  @media (max-width: 768px) {
font-size: 8px;
  }
}
span{
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
}
`
const ImgCont =styled.div`
width: 40px;
height: 40px;
border-radius:50%;
background-color: #caa4fc;
display: flex;
align-items: center;
justify-content: center;
img{
  width: 25px;
}

`
// const LeftContainer =styled.div``
const Right =styled.div`
  flex: 8;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #ddeef3;
  img{
    width: 400px;
    transform: rotate(-10deg);
  }

`
const Larrow =styled.img`
height: 50px;
position: absolute;
left: 100px;
cursor: pointer;
transform: rotate(180deg);
@media (max-width: 768px) {
    display: none;
  }

`
const Rarrow =styled.img`
height: 50px;
cursor: pointer;
right: 100px;
position: absolute;
@media (max-width: 768px) {
    display: none;
  }`
const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id:1,
      img1:"/mobile.png",
      title:"Designing",
      desc:"First we get the your idea and give you some designs that we think could work for your Project",
      tag:"Design",
      img2:"/sara.jpg"
    },
    {
      id:2,
      img1:"/globe.png",
      title:"Development",
      desc:"We figure out the development mode you would like to use and help you devlop your site",
      tag:"Design",
      img2:"/mak.jpg"
    },
    {
      id:3,
      img1:"/writing.png",
      title:"Deployment",
      desc:"This means we help you get your website Online",
      tag:"Design",
      img2:"/ori.jpg"
    },

  ];
  const handleClick = (way)=>{
    way == "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2):
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0)
  }
  return (
    <Section id='works'>
      <Slider style={{transform: `translateX(-${currentSlide*100}vw)`}}>
          {data.map(p=>(
        <Container key={p.id}>
            <Item>
            <Left>
              <LeftContainer>
                <ImgCont>
                <img src={p.img1} alt="" />
                </ImgCont>
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
                <span>{p.tag}</span>
              </LeftContainer>
            </Left>
            <Right>
              <img src={p.img2} alt="" />
            </Right>
          </Item>
        </Container>
         ))}
      </Slider>
      <Larrow src="/arrow.png" alt="" onClick={()=>handleClick("left")} />
      <Rarrow src="/arrow.png" alt="" onClick={()=>handleClick("right")} />

    </Section>
  )
}

export default Works