import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/State";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree); // паттерн "Наблюдатель" ("Observer")

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
