import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "./ProfileInfo.module.css";
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Сохранить</button></div>
        { (error) && <div className={styles.formSummaryError}>
            {error}
        </div>}
        <div><b>Меня зовут:</b>{createField("Имя", "fullName", Input)}</div>
        <div><b>Looking for a job:</b>{createField("", "lookingForAJob", Input, [], {type: "checkbox"})}</div>
        <div><b>Какую работу я ищу:</b>{createField("Описание", "lookingForAJobDescription", Textarea)}</div>
        <div><b>Обо себе:</b>{createField("Немного о себе", "aboutMe", Textarea)}</div>
       <div>
            <b>Контакты</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={style.contact}>
                <b>{key}: {createField(key, "contacts." + key, Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;