import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from "../data/sidebarData";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useHistory } from 'react-router-dom'

const Sidebar = (props) => {

  const history = useHistory();

  //Add channel
  const addChannel = () => {
    const promptName = prompt("Enter a name for your new channel.");
    //if name given add channel to database
    if(promptName) {
      db.collection('rooms').add({
        name: promptName
      })
    }
  }

  //channel redirecting function
  const goToChannel = (id) => {
    if(id) {
      //Id is DB id which is sent in as a prop
      history.push(`/room/${id}`);
    }
  }

  return (
    <Container>
      <WorkSpace>
        <Name>CleverProgrammer</Name>
        <NewMessageButton>
          <AddCircleOutlineIcon />
        </NewMessageButton>
      </WorkSpace>
      <Channels>
        {sidebarItems.map((item) => (
          <ChannelItem>
            {item.icon}
            {item.text}
          </ChannelItem>
        ))}
      </Channels>
      <ChatsContainer>
        <Chats>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </Chats>
        <ChatsList>
       {props.rooms.map(room => (
           <Chat onClick={()=>goToChannel(room.id)}>
               # {room.name}
           </Chat>
       ))}
        </ChatsList>
      </ChatsContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
  color: white;
`;

const WorkSpace = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const NewMessageButton = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const Chats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  cursor: pointer;
  padding: 0px 12px 0 19px;

  `;

const ChatsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const ChatsList = styled.div``;

const Chat = styled.div`
  height: 28px;
  padding-left: 19px;
  cursor: pointer;
    :hover {
        background: #350D36;
    }
`;

const Channels = styled.div`
  padding-top: 20px;
`;

const ChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #350D36; 
  }
`;

const Name = styled.div``;
