import {UserType} from "../types/types";
import usersReducer, {actions, InitialStateType} from "./users-reducer";

let state: InitialStateType;

beforeEach( () => {
        state = {
            users: [
                {id: 0, name: 'User 0', followed: false, photos: {small: null, large: null}, status: 'test status 0'},
                {id: 1, name: 'User 1', followed: false, photos: {small: null, large: null}, status: 'test status 1'},
                {id: 2, name: 'User 2', followed: true, photos: {small: null, large: null}, status: 'test status 2'},
                {id: 3, name: 'User 3', followed: true, photos: {small: null, large: null}, status: 'test status 3'}
            ],
            pageSize: 100,
            totalUsersCount: 0,
            currentPage: 1,
            isFetching: true,
            followingInProgress: [] // array of users IDs
        };
    }
)

test("follow success", () => {
    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test("unfollow success", () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
})