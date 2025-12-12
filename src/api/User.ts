import {apiConfig, getHeaders} from "./apiConfig.ts";

export type PostUserProps = {
    "birthdate": unknown,
    "pseudo": string,
    "firstName": string,
    "lastName": string,
    "email": string,
    "password": string,
    "numberFollowers": number,
    "genderId": number,
    "schoolId": number,
    "professionId": number
}

export const PostUser = async (param:PostUserProps) => {
    const headers = getHeaders()
    return await fetch(apiConfig.apiUrl + "/user/create", {
        method: "POST",
        headers: {...headers},
        body: JSON.stringify(param),
    });
}