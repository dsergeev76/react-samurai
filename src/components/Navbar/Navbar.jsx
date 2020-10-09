import React from 'react';
import './Navbar.module.css';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/Profile" activeClassName={style.activeLink}>Профиль</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Dialogs" activeClassName={style.activeLink}>Сообщения</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News" activeClassName={style.activeLink}>Новости</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Music" activeClassName={style.activeLink}>Музыка</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Settings" activeClassName={style.activeLink}>Настройки</NavLink>
            </div>
        </nav>);
}
export default Navbar;