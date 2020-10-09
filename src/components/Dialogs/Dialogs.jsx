import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + ' ' + style.activeItem}>
                    <NavLink to="/Dialogs/1">Степан Чугунов</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/Dialogs/2">Аполлинарий Котлованов</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/Dialogs/3">Владимир Пинтусевич</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/Dialogs/4">Анатолий Спаснев</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/Dialogs/5">Дмитрий Лукин</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Привет!</div>
                <div className={style.message}>Как дела?</div>
                <div className={style.message}>Хорошо. А у тебя?</div>
            </div>

        </div>
    )
}

export default Dialogs;