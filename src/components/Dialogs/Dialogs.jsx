import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    } );

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/> );

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
                <h4>New message</h4>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;