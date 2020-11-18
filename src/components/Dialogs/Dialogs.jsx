import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    } );

    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/> );

    let newMessageElement = React.createRef();
    let addMessage = () => {
        alert(newMessageElement.current.value);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }

                <h4>New message</h4>
                <textarea cols="30" rows="5" ref={newMessageElement}></textarea>
                <div>
                    <button onClick={addMessage}>Send</button>
                    <button>Cancel</button>
                </div>

            </div>

        </div>
    )
}



export default Dialogs;