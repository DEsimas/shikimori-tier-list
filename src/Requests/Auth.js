import axios from 'axios'

export async function Auth(body) {
    try {
        const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/login', { ...body })
        const tokens = res.data

        localStorage.setItem('accessToken', tokens.accessToken)
        localStorage.setItem('refreshToken', tokens.refreshToken)

        return {
            data: res.statusText,
            error: undefined
        }
    } catch (err) {
        return {
            data: undefined,
            error: err.response.data.error
        }
    }
}

export async function Registration(body) {
    if (body.username === undefined ||
        body.username === '' ||
        body.username?.length < 3) return {
            data: undefined,
            error: 'Username is too short'
        }

    if (body.username?.length >= 20) return {
        data: undefined,
        error: 'Username is too long'
    }

    if (body.password === undefined ||
        body.password === '' ||
        body.password?.length <= 5) return {
            data: undefined,
            error: 'Password is too short'
        }

    if (body.password?.length >= 20) return {
        data: undefined,
        error: 'Password is too long'
    }

    try {
        const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/register', { ...body })
        return {
            data: res.data,
            error: undefined
        }
    } catch (err) {
        return {
            data: undefined,
            error: err.response.data.error
        }
    }
}