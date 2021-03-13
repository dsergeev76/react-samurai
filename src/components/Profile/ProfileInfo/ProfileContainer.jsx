import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserID;/* userId = 2*/
            if (!userId) {
                this.props.history.push("/Login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserID: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    /*withAuthRedirect*/
) (ProfileContainer);