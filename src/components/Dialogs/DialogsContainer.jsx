import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (body) => {
        let action = updateNewMessageTextActionCreator(body);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateNewMessageBody={onMessageChange} addMessage={addMessage} dialogsPage={state.dialogsPage}/>
    )
}



export default DialogsContainer;