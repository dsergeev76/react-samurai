import {InferActionsTypes} from "./redux-store";

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

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/ADD-MESSAGE':
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

export const actions = {
    addMessage: (newMessageText: string) => {
        return {type:'SN/DIALOGS/ADD-MESSAGE', newMessageText} as const
    }
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>