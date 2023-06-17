import React, { useState } from 'react'
import TopBar from './components/TopBar'
import Intro from './components/Intro'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import styled from 'styled-components'
import Portfolio from './components/Portfolio'
import Dropdown from './components/Dropdown'


const Container =styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    /* background-color: #5fffff; */
`
const Section =styled.div`
    height: 89vh;
    position: relative;
    margin-top: 0;
    top: 11vh;
    scroll-behavior: smooth;
    width: 100%;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;//that is for fire fox
    &::-webkit-scrollbar{// for other browser
      display: none;
    }
    
    /* background-color: #5fffff; */
    .Contact,.Intro,.Works,.Portfolio,.Testimonials,.Dropdown{
      width: 100vw;
      height: 89vh;
      padding-top: 70px;
      background-color: yellow;
      scroll-snap-align: start;

    }
`
const App = () => {
  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <Container>
      <Dropdown/>
      <TopBar/>
      <Section>
      <Intro/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      </Section>
    </Container>
  )
}

export default App