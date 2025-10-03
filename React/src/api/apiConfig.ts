export const apiConfig = {
    apiUrl: import.meta.env.API_URL,
}

// header of the request => indicate body will be in json
export const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
    }
}