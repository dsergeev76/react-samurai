import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {currentUserLogin, selectIsAuth} from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";

export type MapPropsType = {}

export const Header: React.FC<MapPropsType> = (props) => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(currentUserLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    const {Header} = Layout;

    return <Header className="header">
        <div className="logo"/>
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><NavLink to="/Users">Пользователи</NavLink></Menu.Item>
                </Menu>
            </Col>
            {isAuth
                ? <> <Col span={1}>
                    <Avatar alt={login || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                </Col>
                    <Col span={5}>
                        <Button onClick={logoutCallback}>Log out</Button>
                    </Col>
                </>
                : <Col span={6}>
                    <Button><Link to={'/login'}>Login</Link></Button>
                </Col>
            }
        </Row>
    </Header>


    /*<header className={style.header}>
        <img
            src="http://ae01.alicdn.com/kf/H1f4b6861a02346e792321ba949b40ceby/Tuning-Cars-Stickers-3D-Vinyl-Car-Wrap-For-Auto-Goods-Decals-Accessories-Products-Styling-The-Army.jpg_220x220q90.jpg"
            alt="logo"/>
            <div className={style.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>: <NavLink to={'/login'}>Login</NavLink>}
            </div>
    </header>;*/
}
