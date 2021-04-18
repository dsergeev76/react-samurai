import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType} from "../../redux/users-reducer";

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

let Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress, follow, unfollow, onFilterChanged}) => {
    return <div>

        <UsersSearchForm onFilterChanged={onFilterChanged} />

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map (user => <User key={user.id}
                                     user={user}
                                     followingInProgress={followingInProgress}
                                     follow={follow}
                                     unfollow={unfollow}/>)

        }
    </div>
}

export default Users;