import { useEffect, useState } from 'react'
import { getUsername } from '../Requests/Link'

import './Header.scss'

export default function Header() {
    const [nickname, setNickname] = useState()

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
                <button className='header-right-unlink'>Unlink account</button>
                <button className='header-right-logout'>Log out</button>
            </div>
        </header>
    )
}