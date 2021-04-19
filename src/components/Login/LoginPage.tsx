import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnPropsType = {
    captchaURL: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaURL}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Login",'email', Input, [required])}
            {createField<LoginFormValuesTypeKeys>("Password",'password', Input, [required], {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined,'rememberMe', Input, [], {type: 'checkbox'}, "Remember me")}
            {captchaURL && <img src={captchaURL} alt={"Captcha не отображается. проверьте настройки"}/>}
            {captchaURL && createField<LoginFormValuesTypeKeys>('captcha', 'captcha', Input, [required])}
            { (error) && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)


type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = () => {

    const captchaURL = useSelector((state: AppStateType) => state.auth.captchaURL)
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"/Profile"} />
    }
    return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
    </div>
}