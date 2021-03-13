import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={style.container}>
            <div>
                <div><img src={profile.photos.large || userPhoto} className={style.mainPhoto} alt="avatarLarge"/></div>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}
        <div><b>Меня зовут:</b> {profile.fullName}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</div>
        {profile.lookingForAJob && <div><b>Какую работу я ищу:</b> {profile.lookingForAJobDescription}</div>}
        <div><b>Обо себе:</b> {profile.aboutMe}</div>
        <div>
            <b>Контакты</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    /*return <div className={style.contact}><b>{contactTitle}:</b> {contactValue}</div>*/
    if (contactValue) {return <div className={style.contact}><b>{contactTitle}:</b> {contactValue}</div>}
    return <span/>
}

export default ProfileInfo;