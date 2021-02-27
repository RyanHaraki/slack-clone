import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = (props) => {
  //Sign in with Google
  const SignIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
        //Create new user
        const newUser = {
            name: result.user.displayName,
            photoUrl: result.user.photoUrl,
        } 
        //Save user in state
        props.setUser(newUser)
        //Set user into local storage to create a "session". 
        //Requires a string so we JSON.stringify our newUser since its an object
        localStorage.setItem('user', JSON.stringify(newUser))
    })
    .catch((error) => {
        alert(error.message)
    })
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://foundercontent.com/static/media/slack_icon.55ad9eab.png" />
        <h1>Sign into Slack</h1>
        <SignInButton onClick={()=> SignIn()}>Sign in with Google</SignInButton>
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlackImg = styled.img`
  height: 100px;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  padding: 0 5px;
  cursor: pointer;
  font-size: 15px;
`;
