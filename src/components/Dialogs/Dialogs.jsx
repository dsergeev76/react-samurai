import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/Dialogs/"+props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <Dialog name="Степан Чугунов" id="1"/>
                <Dialog name="Аполлинарий Котлованов" id="2"/>
                <Dialog name="Владимир Пинтусевич" id="3"/>
                <Dialog name="Анатолий Спаснев" id="4"/>
                <Dialog name="Дмитрий Лукин" id="5"/>
            </div>
            <div className={style.messages}>
                <Message message="Привет!"/>
                <Message message="Как дела?"/>
                <Message message="Хорошо. А у тебя?"/>
            </div>

        </div>
    )
}

export default Dialogs;