import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileType} from "../../../types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserID;/* userId = 2*/
            if (!userId) {
                this.props.history.push("/Login");
            }
        }
        if (!userId) {
            console.error("ID should be exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: PropsType, prevState:PropsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner = {!this.props.match.params.userId}
                         profile = {this.props.profile}
                         status = {this.props.status}
                         updateStatus = {this.props.updateStatus}
                         savePhoto = {this.props.savePhoto}/>
            </div>
        );
    }

}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose<React.ComponentType> (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
) (ProfileContainer);