import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg";

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get ("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUsers(response.data.items);
        });

        /*props.setUsers(
            [
                {id:1, photoURL:'https://a.d-cd.net/96fc986s-960.jpg', followed: false, fullName: 'Аполлинарий Котлованов', status: 'Начальник абзетцера. Проводим работы нулевого цикла на заказ', location: {city:'Lopatino', country:'Russia'}},
                {id:2, photoURL:'https://cs9.pikabu.ru/post_img/2016/09/20/9/1474380038136283489.jpg', followed: true, fullName: 'Владимир Пинтусевич', status: 'M113 - is history...', location: {city:'Petrovich', country:'Everon'}},
                {id:3, photoURL:'https://arma-cwa.ru/wp-content/uploads/2015/10/Piloty-SSSR.png', followed: true, fullName: 'Анатолий Спаснев', status: 'Взлетел я, значит, с Колгуева...', location: {city:'Airbase', country:'Kolguev'}}
            ]
        )*/
    }

    return <div>
        {
            props.users.map(user =><div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="Фото" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {props.unfollow(user.id)} }>Unfollow</button> : <button onClick={() => {props.follow(user.id)} }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}

export default Users;