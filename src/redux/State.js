const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {

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

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState () {
      return this._state
    },
    subscribe (observer) { // паттерн "Наблюдатель" ("Observer")
        this._callSubscriber = observer;
    },

    /*addPost() {
        let newPost = {
            id: 3,
            post: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },*/
    /*updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
    /*addMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },*/
    /*updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },*/
    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }

    }


}

export const addPostActionCreator = () => {
    return {type:ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    return {type:UPDATE_NEW_POST_TEXT, newText:text}
}

export const addMessageActionCreator = () => {
    return {type:ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type:UPDATE_NEW_MESSAGE_TEXT, newText:text}
}

export default store;

window.store = store;