import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/State";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    } );

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }

                <h4>New message</h4>
                <textarea cols="30" rows="5" ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
                <div>
                    <button onClick={addMessage}>Send</button>
                    <button>Cancel</button>
                </div>

            </div>

        </div>
    )
}



export default Dialogs;