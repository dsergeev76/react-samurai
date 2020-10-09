import React from 'react';
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img className={style.avatar}
                 src="https://st4.depositphotos.com/20523700/25922/i/950/depositphotos_259225566-stock-photo-illustration-solider-icon.jpg"
                 alt="avatar"/>
            <div>{props.message}</div>
            <span className={style.like}>Like</span>
            <span>{props.likes}</span>
        </div>);
}
export default Post;