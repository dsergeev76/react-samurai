import React from "react";
import {actions} from "../../redux/dialogs-reducer";
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
        addMessage:(newMessageBody) => {
            dispatch(actions.addMessageActionCreator(newMessageBody));
        }
    }
}


const DialogsContainer = compose (
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)

export default DialogsContainer;