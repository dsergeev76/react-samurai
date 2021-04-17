import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";
import {APIResponseType} from "../api/api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users IDs
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray (state.users, action.userID, "id", {followed: true})
                /*users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user;
                })*/
            };
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray (state.users, action.userID, "id", {followed: false})
                /*users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user;
                })*/
            };
        case 'SN/USERS/SET_USERS':
            return {...state, users: action.users}
        case 'SN/USERS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.usersCount}
        case 'SN/USERS/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        default:
            return state;
    }
}

export const actions = {
    followSuccess: (userID: number) => ({type: 'SN/USERS/FOLLOW', userID} as const),
    unfollowSuccess: (userID: number) => ({type: 'SN/USERS/UNFOLLOW', userID} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT', usersCount: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userID: number) => ({type:'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userID} as const)
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userID: number,
                                   apiMethod: (userID: number) => Promise<APIResponseType>,
                                   actionCreator: (userID: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userID));
    let response = await apiMethod (userID);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(actions.toggleFollowingProgress(false, userID));
}

export const follow = (userID: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}

export const unfollow = (userID: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}

export default usersReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>