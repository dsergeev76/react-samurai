import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <div>
                <img
                    src="http://nrnews.ru/uploads/posts/2019-07/1564046557_25.07.2019_voennosluzhaschie-yuvo-proveli-artilleriyskie-dueli-na-severnom-kavkaze-3.jpg"
                    alt="2s19"/>
            </div>
            <div>
                Avatar+Description
            </div>
            <MyPosts/>
        </div>
    );

}
export default Profile;