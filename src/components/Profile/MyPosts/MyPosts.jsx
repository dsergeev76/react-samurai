import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo ((props) => {

    let postsElements = props.posts.map(post => <Post message={post.post} likes={post.likes}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
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

});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" placeholder="Your post text" validate={[required, maxLength10]}/>
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;