import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id:1, post: "Привет, как дела?", likes:30 },
    { id:1, post: "Мое первое тестовое сообщение", likes:80 }
]

let dialogs = [
    { id:1, name: "Степан Чугунов" },
    { id:2, name: "Аполлинарий Котлованов" },
    { id:3, name: "Владимир Пинтусевич" },
    { id:4, name: "Анатолий Спаснев" },
    { id:5, name: "Дмитрий Лукин" }
]

let messages = [
    { id:1, message: "Привет!" },
    { id:2, message: "Как дела?" },
    { id:3, message: "Хорошо. А у тебя?" }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
