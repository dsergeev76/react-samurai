import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.post} likes={post.likes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(newPostElement.current.value);
        newPostElement.current.value ='';
    }

    return(
        <div className={style.container}>
            My Posts
            <div className={style.newpost}>
                <h4>New post</h4>
                <textarea cols="30" rows="10" ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Post</button>
                    <button>Cancel</button>
                </div>
            </div>
            <div className={style.oldpost}>
                {postsElements}
            </div>
        </div>
        );

}
export default MyPosts;