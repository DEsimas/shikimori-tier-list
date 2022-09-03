import { useEffect, useState } from 'react'
import { getUsername } from '../Requests/Link'
import { logOut as logOutRequest } from '../Requests/Auth'

import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { makeRequest } from '../Requests/Tokens'
import { unlink as unlinkRequest } from '../Requests/Link'

export default function Header() {
    const [nickname, setNickname] = useState()

    const navigate = useNavigate()

    function logOut() {
        logOutRequest().then(res => { if (res.data) navigate('/authentication') })
    }

    function unlink() {
        makeRequest(undefined, unlinkRequest).then(res => {
            navigate('/link')
        })
    }

    useEffect(() => {
        async function fetch() {
            const res = await getUsername()
            setNickname(res.data.username)
        }
        fetch()
    })

    return (
        <header className='header'>
            <a target='_blank' rel='noreferrer' className='header-link' href={`https://shikimori.one/${nickname}`}>Logged in as {nickname}</a>

            <div className='header-right'>
                <button className='header-right-unlink' onClick={unlink}>Unlink account</button>
                <button className='header-right-logout' onClick={logOut}>Log out</button>
            </div>
        </header>
    )
}