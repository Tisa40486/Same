import {apiConfig, getHeaders} from "./apiConfig.ts";

export type PostUserProps = {
    "pseudo": string, // TODO : rename to username
    "email": string,
    // TODO : first name
    // TODO : last name
    "age": 0,           // TODO : age => date of birth
    "password": string,
}

export const PostUser = async (param:PostUserProps) => {
    const headers = getHeaders()
    const response = await fetch(apiConfig.apiUrl + "/user", {
        method: "POST",
        headers: {...headers},
        body: JSON.stringify(param),
    });
}