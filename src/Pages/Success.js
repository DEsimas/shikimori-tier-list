import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Success.scss'

export default function Success() {
    const [timer, setTimer] = useState(5)

    const navigate = useNavigate();

    useEffect(() => {
        if (timer === 0) navigate('/')

        setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)
    })

    return (
        <div className='success'>
            <h2 className='success-header'>Success</h2>
            <button className='success-button'>To the main page <span className='success-button-timer'>{timer}</span></button>
        </div>
    )
}