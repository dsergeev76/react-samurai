import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id: 1, post: "Привет, как дела?", likes: 30},
        {id: 2, post: "Мое первое тестовое сообщение", likes: 80}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                post: action.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postID)
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {type:ADD_POST,newPostText}
}


export const setUserProfile = (profile) => {
    return {type:SET_USER_PROFILE, profile}
}

export const setStatus = (status) => {
    return {type:SET_STATUS, status}
}

export const deletePost = (postID) => {
    return {type: DELETE_POST, postID}
}

export const getUserProfile = (userID) => (dispatch) => {
    profileAPI.getProfile(userID).then(response =>{
        dispatch (setUserProfile(response.data));
    });
}

export const getStatus = (status) => (dispatch) => {
    profileAPI.getStatus(status).then(response => {
        dispatch (setStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch (setStatus(status));
        }
    })
}

export default profileReducer;