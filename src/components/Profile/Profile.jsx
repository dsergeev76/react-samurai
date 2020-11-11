import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let posts = [
        { id:1, post: "Привет, как дела?", likes:30 },
        { id:1, post: "Мое первое тестовое сообщение", likes:80 }
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {posts}/>
        </div>
    );

}
export default Profile;