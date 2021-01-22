import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <HeaderContainer/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path="/Profile/:userId?" render={ () => <ProfileContainer />}/>
                  <Route path="/Dialogs" render={ () => <DialogsContainer />}/>
                  <Route path="/Users" render={ () => <UsersContainer />}/>
                  <Route path="/News" render={ () => <News />}/>
                  <Route path="/Music" render={ () => <Music />}/>
                  <Route path="/Settings" render={ () => <Settings />}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
