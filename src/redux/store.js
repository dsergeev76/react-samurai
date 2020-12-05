import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar,action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;