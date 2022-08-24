export function isValidEmail(email = "") {
    if (!email) {
        return false
    }
    if (/^([a-zA-Z0-9]{3,20})+@(([a-zA-Z]{4,20})+\.)+([a-zA-Z]{2,4})+$/.test(email)) {
        return (true)
    }
    return (false)
}

export function getError(error) {
    if (!error) {
        return "Somthing went wrong"
    } else if (typeof error === "string") {
        return error
    } else {
        return error.response?.data?.message || error.response?.message || error.message || error.data || `${error}`
    }
}


export const API_CONFIG = {
    headers: {
        "system": "WEB",
        "user_name": "wEbuser1$",
        "app_type": "Web",
        "client_version": "2",
        "password": "weBpwd$3"
    }
}
