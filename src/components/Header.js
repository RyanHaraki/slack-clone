import React, { Profiler } from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = ({ user, signOut }) => {
  return (
    <Container>
      <LeftNothing />
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search"></input>
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <Profile>
        <Name>{user.name}</Name>
        <ProfileImage onClick={signOut}>
          <img src={user.photoUrl ? user.photoUrl : "https://i.imgur.com/6VBx3io.png"} />
        </ProfileImage>
      </Profile>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 10;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin: 0 16px;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`;

const Search = styled.div`
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: white;
    outline: none;
    flex: 1;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const ProfileImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LeftNothing = styled.div``;
