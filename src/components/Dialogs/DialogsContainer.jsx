import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body) => {
            let action = updateNewMessageTextActionCreator(body);
            dispatch(action);
        },
        addMessage:() => {
            dispatch(addMessageActionCreator());
        }
    }
}


const DialogsContainer = compose (
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)

export default DialogsContainer;