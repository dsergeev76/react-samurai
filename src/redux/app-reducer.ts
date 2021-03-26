import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type InitializedSucceessActionType = {
    type: typeof INITIALIZED_SUCCESS;
}

export const initializedSucceess = (): InitializedSucceessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    //let promise = dispatch(somethingOther());
    //let promise = dispatch(somethingOther());
    Promise.all([promise]).then(() => {
        dispatch(initializedSucceess());
    });
}