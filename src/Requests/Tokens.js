import axios from 'axios';

export async function makeRequest(body, req) {
    var res = await req(body)
    if (res.error === 403) {
        await refresh()
        res = await req(body)
    }
    return res
}

export async function refresh() {
    const res = await axios.post(process.env.REACT_APP_SERVER_URL + '/refresh', {
        token: localStorage.getItem('refreshToken')
    })

    if (res.status === 200) localStorage.setItem('accessToken', res.data.accessToken)
    else {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }
}