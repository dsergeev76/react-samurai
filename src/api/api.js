import * as axios from "axios";

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

    follow (userId) {
        return instance.post ('follow/'+userId,{})
            .then(response => {
                return response.data;
            })
    },

    unfollow (userId) {
        return instance.delete ('follow/'+userId)
            .then(response => {
                return response.data;
            })
    },

    getProfile (userId) {
        console.warn('Obsolete method. Use profileAPI.getProfile')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {

    getProfile (userId) {
        return instance.get (`profile/`+userId);
    },
    getStatus (userId) {
        return instance.get (`profile/status/`+userId);
    },
    updateStatus (statusText) {
        return instance.put ('profile/status/', {status:statusText});
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put ('profile/photo', formData, {
            'Content-type': 'multipart/form-data'
        });
    }
}

export const authAPI = {
    me () {
        return instance.get (`auth/me`);
    },

    login (email, password, rememberMe = false) {
        return instance.post ('auth/login',{email:email, password:password, rememberMe: rememberMe});
    },

    logout () {
        return instance.delete ('auth/login');
    }
}