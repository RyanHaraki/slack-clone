import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

const Chat = ({ user }) => {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        setMessages(messages);
      });
  };


  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text: text,
        user: user.name,
        userImage: user.photoUrl ? user.photoUrl : "https://i.imgur.com/6VBx3io.png",
        timestamp: firebase.firestore.Timestamp.now(),
      };

      db.collection("rooms").doc(channelId).collection("messages").add(payload);

    }
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container id='chat-container'>
      <ChatHeader>
        <HeaderLeft>
          <div className="channel-name">
            <p>
              <strong># {channel && channel.name}</strong>
            </p>
            <StarBorderIcon />
          </div>

          <p className="header-text-bottom">
            Company-wide announcements and work-based matters
          </p>
        </HeaderLeft>
        <HeaderRight>
          <p>Details</p> <HelpOutlineIcon />
        </HeaderRight>
      </ChatHeader>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              message={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))
          }
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`;

const ChatHeader = styled.div`
  padding: 6px 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(29, 28, 29, 0.7);
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`;

const HeaderLeft = styled.div`
  .channel-name {
    display: flex;
    align-items: center;
    margin: 10px 0;
    color: black;
  }

  .header-text-bottom {
    margin-bottom: 10px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
