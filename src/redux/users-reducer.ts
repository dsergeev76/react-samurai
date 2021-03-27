import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users IDs
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
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
        case UNFOLLOW:
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
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.usersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        default:
            return state;
    }
}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userID: number
}

export const followSuccess = (userID: number): FollowSuccessActionType => ({type: FOLLOW, userID});

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userID: number
}

export const unfollowSuccess = (userID: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userID});

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>):SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    usersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, usersCount: totalUsersCount});

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});

export type ToggleFollowingProgressActionType ={
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userID: number
}

export const toggleFollowingProgress = (isFetching: boolean, userID: number): ToggleFollowingProgressActionType => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID});

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: any, userID: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userID));
    let data = await apiMethod (userID);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID));
}

export const follow = (userID: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userID: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;