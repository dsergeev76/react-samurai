import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, updateStatus, status}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={style.container}>
            <div>
                <div><img src={profile.photos.large} alt="avatarLarge"/></div>
                <div><img src={profile.photos.small} alt="avatarSmall"/></div>
                <div>Обо себе: {profile.aboutMe}</div>
                <div>Меня зовут: {profile.fullName}</div>
                <div>Какую работу я ищу: {profile.lookingForAJobDescription}</div>
                <div>Страница Вконтакте: {profile.contacts.vk}</div>
                <div>Twitter: {profile.contacts.twitter}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;