import React, { useEffect, useState } from 'react'
import Link from '../Components/Link'
import Auth from '../Components/Auth'
import { getCheck } from '../Requests/Link'

export default function Root() {
    const [state, setState] = useState()

    useEffect(() => {
        async function fetchState() {
            if (localStorage.getItem('accessToken') === null) return 'auth'
            if ((await getCheck()).data) return 'list'
            return 'link'
        }
        fetchState().then(res => {
            console.log(res)
            setState(res)
        })
    }, [])

    switch (state) {
        case 'auth':
            return <Auth />
        case 'link':
            return <Link />
        case 'list':
            return <div>sosi</div>
        default:
            return <div>Loading...</div>
    }
}