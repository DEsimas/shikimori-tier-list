import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Registration as RegistrationRequest } from '../Requests/Auth'

import './Registration.scss'

export default function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [secondPassword, setSecondPassword] = useState('')
    const [error, setError] = useState()

    const navigate = useNavigate()

    async function submit(e) {
        if (password !== secondPassword) return setError('Passwords are different')
        e.target.setAttribute('disabled', 'disabled')
        const { data, error } = await RegistrationRequest({ username, password })
        e.target.removeAttribute('disabled')
        if (error) setError(error)
        if (data) navigate('/success')
    }

    return (
        <div className='registration'>
            <h3 className='registration-header'>Registration</h3>
            <input className='registration-input' type='text' onChange={e => setUsername(e.target.value)} placeholder='username' />
            <input className='registration-input' type='password' onChange={e => setPassword(e.target.value)} placeholder='password' />
            <input className='registration-input' type='password' onChange={e => setSecondPassword(e.target.value)} placeholder='repeat password' />
            <button className='registration-button' onClick={submit} >Continue</button>
            <span className='registration-error'>{error}</span>
        </div>
    )
}