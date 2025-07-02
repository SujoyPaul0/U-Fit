import React from 'react'
import styled from "styled-components";
import TextInput from './TextInput';
import Button from './Button';


const Container = styled.div``;
const Title = styled.div``;
const Span = styled.div``;



const SignUp = () => {
  return (
    <Container>
        <div>
            <Title>Welcome to U-Fit❤️</Title>
            <Span>Please login with your details here</Span>
        </div>
        <div style={{
            display: "flex",
            gap: "20px",
            flexDirection: "Column",
        }}>
            <TextInput 
            label="Email Address" 
            placeholder="Enter your email address"
            />
            <TextInput 
            label="Full Name" 
            placeholder="Enter your Full Name"
            />
            <TextInput 
            label="Password" 
            placeholder="Enter your password"
            password
            />
            <Button text="SignUp" />
        </div>
    </Container>
  );
};

export default SignUp