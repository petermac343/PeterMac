import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IconButton } from '@mui/material';
import Dropdown from './Dropdown';
const Section =styled.div`
    height: 11vh;
    width: 100%;
    background-color: #ffffff;
    color: #4f4ff0;
    position: fixed;
    top: 0;
    z-index: 2;
`

const Wrapper =styled.div`
padding: 10px 30px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left =styled.div`
display:flex;
gap: 20px;
a{
    text-decoration: none;
    font-size: 30px;
    font-weight: 700;
    color: inherit;
    color: transparent;
    -webkit-text-stroke: 1px #0541f7;
    -webkit-text-fill-color: transparent;
text-shadow: 0px 3px 1px rgba(0, 52, 184, 0.2)
 
}
span{
    font-size: 16px;
    font-weight: 100;
    color: #2d2c2d;
    @media (max-width: 768px) {
    display: none;
  }
}
`
const Social=styled.div`
display: flex;
align-items: center;


`
const Mail=styled.div`
display: flex;
align-items: center;

`

const Right =styled.div`

`



const TopBar = () => {
  const handleEmailButtonClick = () => {
    const emailAddress = 'perwriters@gmail.com';
    const emailSubject = 'Regarding your website';
    const emailBody = 'Hello, I would like to discuss...';
  
    const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
    // Open the user's email client with the specified email details
    window.location.href = emailLink;
  };
  const handlePhoneButtonClick = () => {
    // handle the phone icon.
    const phoneNumber = '+25415990719';
    const phoneLink = `tel:${phoneNumber}`;
    if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
      window.open(phoneLink);
    } else {
      console.log('Phone calls are not supported on this device.');
    }
  };
  
  return (
    <Section>
      <Wrapper>
      <Left>
        <a href="#intro">Peter M...</a>
        <Social>
            <IconButton onClick={handlePhoneButtonClick}><PersonIcon/></IconButton>
            <span>+254715990719</span>
        </Social>
        <Mail>
        <IconButton onClick={handleEmailButtonClick}><MailOutlineIcon/></IconButton>
            <span>perwriters@gmail.com</span>
        </Mail>

      </Left>
      <Right>
      </Right>
      </Wrapper>

    </Section>
  )
}

export default TopBar