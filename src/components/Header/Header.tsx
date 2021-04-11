import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}

export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return <header className={style.header}>
        <img
            src="http://ae01.alicdn.com/kf/H1f4b6861a02346e792321ba949b40ceby/Tuning-Cars-Stickers-3D-Vinyl-Car-Wrap-For-Auto-Goods-Decals-Accessories-Products-Styling-The-Army.jpg_220x220q90.jpg"
            alt="logo"/>
            <div className={style.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>: <NavLink to={'/login'}>Login</NavLink>}
            </div>
    </header>;
}
export default Header;