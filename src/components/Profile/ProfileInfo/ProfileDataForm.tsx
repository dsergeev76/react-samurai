import React from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "./ProfileInfo.module.css";
import styles from "../../common/FormsControls/FormsControls.module.css";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType,PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Сохранить</button></div>
        { (error) && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Меня зовут:</b>{createField<ProfileTypeKeys>("Имя", "fullName", Input, [])}
        </div>
        <div>
            <b>Looking for a job:</b>{createField<ProfileTypeKeys>("", "lookingForAJob", Input, [], {type: "checkbox"})}
        </div>
        <div>
            <b>Какую работу я ищу:</b>{createField<ProfileTypeKeys>("Описание", "lookingForAJobDescription", Textarea, [])}
        </div>
        <div>
            <b>Обо себе:</b>{createField<ProfileTypeKeys>("Немного о себе", "aboutMe", Textarea, [])}
        </div>
       <div>
            <b>Контакты</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={style.contact}>
                {/* todo: create some solution for embedded objects */}
                <b>{key}: {createField(key, "contacts." + key, Input, [])}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;