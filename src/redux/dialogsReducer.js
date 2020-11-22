const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {type:ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type:UPDATE_NEW_MESSAGE_TEXT, newText:text}
}

export default dialogsReducer;