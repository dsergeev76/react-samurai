import {PhotosType, ProfileType} from "../types/types";
import {instance, APIResponseType} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then (response => response.data)
    },
    getStatus(userId: any) {
        return instance.get<string>(`profile/status/` + userId).then (response => response.data)
    },
    updateStatus(statusText: string) {
        return instance.put<APIResponseType>('profile/status/', {status: statusText}).then (response => response.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>('profile/photo', formData, {
            headers: {'Content-type': 'multipart/form-data'}
        }).then (response => response.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>('profile', profile).then (response => response.data)
    }
}