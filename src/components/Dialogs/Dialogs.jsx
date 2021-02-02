import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    } );

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/> );

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (event) => {
        let text = event.currentTarget.value;
        props.updateNewMessageBody(text);
    }

    if (!props.isAuth) return <Redirect to="/Login"/>;

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }

                <h4>New message</h4>
                <textarea cols="30" rows="5" onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                    <button>Cancel</button>
                </div>

            </div>

        </div>
    )
}



export default Dialogs;