import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";

const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={style.container}>
            <div>
                <div><img src={profile.photos.large || userPhoto} className={style.mainPhoto} alt="avatarLarge"/></div>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <div><img src={profile.photos.small || userPhoto} className={style.smallPhoto} alt="avatarSmall"/></div>
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