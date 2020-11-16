import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom";


function App(props) {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path="/Profile" render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                  <Route path="/Dialogs" render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
                  <Route path="/News" render={ () => <News />}/>
                  <Route path="/Music" render={ () => <Music />}/>
                  <Route path="/Settings" render={ () => <Settings />}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
