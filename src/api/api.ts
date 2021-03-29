import axios from "axios";
import {ProfileType} from "../types/types";

const instance = axios.create ({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "dd9c9b22-2524-4727-9b12-db8ac64e1aff"
    }

});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize= 10) {
        return instance.get (`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow (userId: number) {
        return instance.post ('follow/'+userId,{})
            .then(response => {
                return response.data;
            })
    },

    unfollow (userId: number) {
        return instance.delete ('follow/'+userId)
            .then(response => {
                return response.data;
            })
    },

    getProfile (userId: number) {
        console.warn('Obsolete method. Use profileAPI.getProfile')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {

    getProfile (userId: number) {
        return instance.get (`profile/`+userId);
    },
    getStatus (userId: any) {
        return instance.get (`profile/status/`+userId);
    },
    updateStatus (statusText: string) {
        return instance.put ('profile/status/', {status:statusText});
    },
    savePhoto (photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put ('profile/photo', formData, {
            headers: {'Content-type': 'multipart/form-data'}
        });
    },
    saveProfile (profile: ProfileType) {
        return instance.put ('profile', profile);
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptchaEnum
    messages: Array<string>
}

export const authAPI = {
    me () {
        return instance.get<MeResponseType>(`auth/me`).then(response => response.data);
    },

    login (email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<LoginResponseType> ('auth/login',{email:email, password:password, rememberMe: rememberMe, captcha: captcha}).then(response => response.data);
    },

    logout () {
        return instance.delete ('auth/login');
    }
}

export const securityAPI = {
    getCaptchaURL () {
        return instance.get ('security/get-captcha-url');
    }
}