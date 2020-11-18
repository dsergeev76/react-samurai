import {rerenderEntireTree} from "../Render";

let state = {

    profilePage: {
        posts: [
            {id: 1, post: "Привет, как дела?", likes: 30},
            {id: 2, post: "Мое первое тестовое сообщение", likes: 80}
        ],
        newPostText: ''
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Степан Чугунов"},
            {id: 2, name: "Аполлинарий Котлованов"},
            {id: 3, name: "Владимир Пинтусевич"},
            {id: 4, name: "Анатолий Спаснев"},
            {id: 5, name: "Дмитрий Лукин"}
        ],
        messages: [
            {id: 1, message: "Привет!"},
            {id: 2, message: "Как дела?"},
            {id: 3, message: "Хорошо. А у тебя?"}
        ],
        newMessageText: ''
    },

    sideBar: {

    }

}

export let addPost = () => {
    let newPost = {
        id: 3,
        post: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export default state;