import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map( p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {
            props.users.map(user =><div key={user.id}>
                <span>
                    <NavLink to={'/profile/' + user.id}>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="Фото" className={styles.userPhoto}/>
                        </div>
                    </NavLink>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                axios.delete (`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "dd9c9b22-2524-4727-9b12-db8ac64e1aff"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    });
                            }}>Unfollow</button>:
                            <button onClick={() => {
                                axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "dd9c9b22-2524-4727-9b12-db8ac64e1aff"
                                    }
                                })
                                    .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                });
                            }}>Follow</button>}
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