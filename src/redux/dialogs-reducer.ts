const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Степан Чугунов"},
        {id: 2, name: "Аполлинарий Котлованов"},
        {id: 3, name: "Владимир Пинтусевич"},
        {id: 4, name: "Анатолий Спаснев"},
        {id: 5, name: "Дмитрий Лукин"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Привет!"},
        {id: 2, message: "Как дела?"},
        {id: 3, message: "Хорошо. А у тебя?"}
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type AddMessageActionCreatorActionType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}

export const addMessageActionCreator = (newMessageText: string): AddMessageActionCreatorActionType => {
    return {type:ADD_MESSAGE, newMessageText}
}


export default dialogsReducer;