import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

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
                                followAPI.unfollow(user.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    });
                            }}>Unfollow</button>:
                            <button onClick={() => {
                                followAPI.follow(user.id).then(data => {
                                    if (data.resultCode === 0) {
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