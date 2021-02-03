import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/Login"/>;
            return <Component {...this.props}/>;
        }
    }

    let connectedAuthRedirectComponent = connect (mapStateToPropsForRedirect)(RedirectComponent);

    return connectedAuthRedirectComponent;
}

export default withAuthRedirect;