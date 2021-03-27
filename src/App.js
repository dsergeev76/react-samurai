import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        //alert(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to={"/Profile/"}/>}/>
                        <Route path="/Profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/Dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/Users" render={() => <UsersContainer pageTitle={'Самураи'}/>}/>
                        <Route path="/News" render={() => <News/>}/>
                        <Route path="/Music" render={() => <Music/>}/>
                        <Route path="/Settings" render={() => <Settings/>}/>
                        <Route path="/Login" render={() => <Login/>}/>
                        <Route path="*" render={() => <div>404 - NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose (
    withRouter,
    connect (mapStateToProps, {initializeApp})) (App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;