import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        { id:1, name: "Степан Чугунов" },
        { id:2, name: "Аполлинарий Котлованов" },
        { id:3, name: "Владимир Пинтусевич" },
        { id:4, name: "Анатолий Спаснев" },
        { id:5, name: "Дмитрий Лукин" }
    ]

    let messages = [
        { id:1, message: "Привет!" },
        { id:2, message: "Как дела?" },
        { id:3, message: "Хорошо. А у тебя?" }
    ]

    let dialogsElements = dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    } );

    let messagesElements = messages.map(message => <Message message={message.message}/> );

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>

        </div>
    )
}



export default Dialogs;