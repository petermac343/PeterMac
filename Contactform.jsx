import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 350px;
  }
`;


const Form = styled.form`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;


const Input = styled.input`
  padding: 4px;
  margin: 10px 0px;
  width: 300px;
  border-radius: 5px;
  height: 20px;
  border: none;
  font-size: 14px;
`;

const TextArea = styled.textarea`
width: 300px;
height: 120px;
font-size: 14px;
margin-top: 5px;
border-radius: 6px;
padding: 5px;
`;

const Button = styled.button`
width: 150px;
height: 30px;
color: white;
border: none;
margin-top: 10px;
background-color: #00306a;
border-radius: 10px ;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here

    // Simulating form submission
    if (name && email && message) {
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');

      // Show success message
      setSuccessMessage('Thanks, I will Reply ASAP.');
      setErrorMessage('');
    } else {
      // Show error message
      setSuccessMessage('');
      setErrorMessage('Please Add');
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Input
        placeholder='Your Name:'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
        placeholder='Your email'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
        placeholder='Hi, I want a website'
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
