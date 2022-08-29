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
    console.log('verifying code...')
    return {
        data: undefined,
        error: 'Server is undefined'
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