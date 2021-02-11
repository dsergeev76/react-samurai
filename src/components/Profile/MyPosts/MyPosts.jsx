import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.post} likes={post.likes}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return(
        <div className={style.container}>
            My Posts
            <div className={style.newpost}>
                <h4>New post</h4>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={style.oldpost}>
                {postsElements}
            </div>
        </div>
        );

}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostText" placeholder="Your post text" />
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;