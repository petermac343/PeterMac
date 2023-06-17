import React from 'react';
import styled from 'styled-components';
import ContactForm from './Contactform';

const Section = styled.div`
  height: 100%;
  background-color: #96dbee;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 100%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
    color: #1b1b1b;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Left>
        <Img src="/shaking.png" alt="Illustration" />
      </Left>
      <Right>
        <h2>Contact Me</h2>
        <ContactForm />
      </Right>
    </Section>
  );
};

export default Contact;
