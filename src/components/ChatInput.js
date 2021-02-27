import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if(!input) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <Container>
      <InputContainer>
        <form onSubmit={send}>
          <input
            type="text"
            value={input}
            placeholder="Message..."
            onChange={(e)=> setInput(e.target.value)}
          ></input>
          <SendButton type='submit' onClick={send} >
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  padding: 0 20px 25px 20px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding: 0 0 0 10px;

    input {
      flex: 1;
      border: none;
      font-size: 13px;
      outline: none;
    }
  }
`;

const SendButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;
    color: #d9d9d9;
  }

  :hover {
    background: #148567;
  }
`;
