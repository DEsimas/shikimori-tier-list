import axios from "axios"

export async function getCode(username) {
    try {
        const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/link/code', {
            nickname: username
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        return {
            error: undefined,
            data: { code: res.data.code }
        }
    } catch (error) {
        return {
            error: error?.response?.data?.error || error.request.status,
            data: undefined
        }
    }
}

export async function verifyCode() {
    try {
        const res = await axios.get(process.env.REACT_APP_SERVER_URL + '/link/verify', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        console.log(res);
        return {
            error: undefined,
            data: res.statusText
        }
    } catch (error) {
        return {
            error: error?.response?.data?.error,
            data: undefined
        }
    }
}

export async function getUsername() {
    try {
        const res = await axios.get(process.env.REACT_APP_SERVER_URL + '/link/username', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        return {
            error: undefined,
            data: { username: res.data.username }
        }
    } catch (error) {
        return {
            error: error.request.status,
            data: undefined
        }
    }
}

export async function getCheck() {
    try {
        const res = await axios.get(process.env.REACT_APP_SERVER_URL + '/link/check', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        return {
            error: undefined,
            data: res.data.check
        }
    } catch (error) {
        return {
            error: error.request.status,
            data: undefined
        }
    }
}

export async function unlink() {
    try {
        const res = await axios.delete(process.env.REACT_APP_SERVER_URL + '/unlink', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        return {
            error: undefined,
            data: res.statusText
        }
    } catch (error) {
        return {
            error: error.request.status,
            data: undefined
        }
    }
}