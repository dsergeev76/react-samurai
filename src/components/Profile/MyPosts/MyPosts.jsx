import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return <div>
        My Posts
        <div className={style.newpost}>
            <h4>New post</h4>
            <textarea cols="30" rows="10"></textarea>
            <div>
                <button>Post</button>
                <button>Cancel</button>
            </div>
        </div>
        <div>
            <Post message="Привет, как дела?" likes="30"/>
            <Post message="Мое первое тестовое сообщение" likes="80"/>
        </div>
    </div>;
}
export default MyPosts;