import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={style.container}>
            <img className={style.image}
                 src="http://nrnews.ru/uploads/posts/2019-07/1564046557_25.07.2019_voennosluzhaschie-yuvo-proveli-artilleriyskie-dueli-na-severnom-kavkaze-3.jpg"
                 alt="2s19"/>
            <div>
                Avatar+Description
            </div>
        </div>
    );
}

export default ProfileInfo;