import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.container}>
            {/*<img className={style.image}
                 src="http://nrnews.ru/uploads/posts/2019-07/1564046557_25.07.2019_voennosluzhaschie-yuvo-proveli-artilleriyskie-dueli-na-severnom-kavkaze-3.jpg"
                 alt="2s19"/>*/}
            <div>
                <div><img src={props.profile.photos.large} alt="avatarLarge"/></div>
                <div><img src={props.profile.photos.small} alt="avatarSmall"/></div>
                <div>Обо себе: {props.profile.aboutMe}</div>
                <div>Меня зовут: {props.profile.fullName}</div>
                <div>Какую работу я ищу: {props.profile.lookingForAJobDescription}</div>
                <div>Страница Вконтакте: {props.profile.contacts.vk}</div>
                <div>Twitter: {props.profile.contacts.twitter}</div>
                <ProfileStatus status={'Hello, my friends!'}/>
            </div>
        </div>
    );
}

export default ProfileInfo;