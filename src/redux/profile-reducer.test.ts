import profileReducer, {actions} from "./profile-reducer";
import {ProfileType} from "../types/types";

let state = {
    posts: [
        {id: 1, post: "Привет, как дела?", likes: 30},
        {id: 2, post: "Мое первое тестовое сообщение", likes: 80}
    ],
    profile: null,
    status: "",
    newPostText: ""
}

it('length of post should be incremented', () => {

    // 1. start data

    let action = actions.addPostActionCreator('test new post text');

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect (newState.posts.length).toBe(3);

});


it('text of new post should be correct', () => {

    // 1. start data

    let action = actions.addPostActionCreator('test new post text');

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect (newState.posts[2].post).toBe('test new post text');
});

it('after deleting posts should be decrement', () => {

    // 1. start data

    let action = actions.deletePost(1);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect (newState.posts.length).toBe(1);
});


it("after deleting posts shouldn't be decrement if ID is incorrect", () => {

    // 1. start data

    let action = actions.deletePost(1000);

    // 2. action

    let newState = profileReducer(state, action);

    // 3. expectation

    expect (newState.posts.length).toBe(2);
});