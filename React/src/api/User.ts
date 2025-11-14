import {apiConfig, getHeaders} from "./apiConfig.ts";

export type PostUserProps = {
    "id": number,
    "isAdmin": boolean,
    "birthday": string,
    "firstName": string,
    "lastName": string,
    "pseudo": string,
    "email": string,
    "password": string,
    "numberFollowers": number,
    "createAt": string,
    "genderId": number,
    "schoolId": number,
    "professionId": number
}

export const PostUser = async (param:PostUserProps) => {
    const headers = getHeaders()
    const response = await fetch(apiConfig.apiUrl + "/user/create", {
        method: "POST",
        headers: {...headers},
        body: JSON.stringify(param),
    });
    return response;
}