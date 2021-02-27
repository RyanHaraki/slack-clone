import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import { useEffect, useState } from "react";
import { auth, provider } from "./firebase";

function App() {
  const [rooms, setRooms] = useState([]);
  //Set user in state. Default value is user from local storage so
  //user is still logged in on refresh
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getChannels = () => {
    //get collection from db
    db.collection("rooms").onSnapshot((snapshot) => {
      //do something with data in collection
      setRooms(
        snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name };
        })
      );
    });
  };

  //sign out function
  const signOut = () => {
    auth.signOut().then(() => {
      //remove user
      setUser(null);

      //remove user from local storage to end "sessionf"
      localStorage.removeItem('user');
    });
  };

  // Code in here only runs on load
  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} signOut={signOut} />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room/:channelId">
                  <Chat user={user}/>
                </Route>
                <Route path='/'>
                  Select or Create Channel
                </Route>
                {/* <Route path="/">
                  <Login />
                </Route> */}
              </Switch>
            </Main>
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
