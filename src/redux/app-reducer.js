import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
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

export const initializedSucceess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //let promise = dispatch(somethingOther());
    //let promise = dispatch(somethingOther());
    Promise.all([promise]).then(() => {
        dispatch(initializedSucceess());
    });
}