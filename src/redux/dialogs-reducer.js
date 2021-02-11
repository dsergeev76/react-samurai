const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => {
    return {type:ADD_MESSAGE, newMessageText}
}


export default dialogsReducer;