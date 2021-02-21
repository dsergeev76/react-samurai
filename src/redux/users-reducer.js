import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user;
                })
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

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userID) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID});

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch (toggleIsFetching(true));
        dispatch (setCurrentPage(page));

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch (toggleIsFetching(false));
            dispatch (setUsers(data.items));
            dispatch (setTotalUsersCount(data.totalCount));
        });
    }
}
export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        usersAPI.unfollow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID));
        });
    }
}
export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID));
        usersAPI.follow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userID))
            }
            dispatch(toggleFollowingProgress(false, userID));
        });

    }
}

export default usersReducer;