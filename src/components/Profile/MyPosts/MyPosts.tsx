import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {createField, GetStringKeys, Textarea} from "../../common/FormsControls/FormsControls";
import {PostType} from "../../../types/types";

type AddPostFormValuesType = {
    newPostText:string
}

export type MapPropsType = {
    posts: Array<PostType>
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = props => {

    let postsElements =
        props.posts
            .map(post => <Post key={post.id} message={post.post} likes={post.likes}/>);

    let onAddPost = (values: AddPostFormValuesType) => {
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
}

const maxLength = maxLengthCreator(100);

type AddNewPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<AddNewPostFormValuesTypeKeys>("Your post text",'newPostText', Textarea, [required, maxLength])}
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddPostFormValuesType>({form: "profileAddNewPostForm"})(AddNewPostForm)

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;