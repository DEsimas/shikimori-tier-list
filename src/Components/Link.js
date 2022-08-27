import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getCode as getCodeRequest, verifyCode } from '../Requests/Link'

import './Link.scss'

export default function Link() {
    const [lang, setLang] = useState('en')
    const [code, setCode] = useState()
    const [username, setUsername] = useState('')
    const [codeError, setCodeError] = useState()
    const [nameError, setNameError] = useState()

    const navigate = useNavigate()

    async function getCode(e) {
        e.target.setAttribute('disabled', 'disabled')
        const { data, error } = await getCodeRequest(username)
        e.target.removeAttribute('disabled')
        if(error) setNameError(error)
        else setCode(data.code)
    }

    async function finish(e) {
        e.target.setAttribute('disabled', 'disabled')
        const { data, error } = await verifyCode()
        e.target.removeAttribute('disabled')
        if(error) setCodeError(error)
        else navigate('/')
    }

    return (
        <div className='link'>
            <button className='link-langButton' onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>{lang === 'en' ? 'Rus' : 'Eng'}</button>
            <h2 className='link-s1-header'>{lang === 'en' ? 'It\'s time to link your account with shikimori' : 'Пора привязать ваш шикимори аккаунт'}</h2>
            <div className='link-s1'>
                <p className='link-s1-para'>{lang === 'en' ? '1) Enter your shikimori nickname' : '1) Введите ваш ник на шикимори'}</p>
                <input onChange={e => setUsername(e.target.value)} className='input-s1-input' type='text' placeholder={lang === 'en' ? 'nickname' : 'ник'} />
                <button className='link-s1-button' onClick={getCode}> {lang === 'en' ? 'Get code' : 'Получить код'} </button>
                <span className='link-s1-error'>{nameError}</span>
            </div>
            <div className={`link-s2 ${code ? '' : 'hide'}`}>
                <p className='link-s2-para'>
                    {lang === 'en' ?
                        '2) Open settings on shikimori and state this code as "website" (after linking you can remove it)' :
                        '2) Перейдите в настройки вашего шикимори аккаунта и в поле "сайт" укажите код (после привязки можно убрать его)'}
                </p>
                <span className='link-s2-code'>Code: <span id='code' className='link-s2-code-content'>{code}</span></span>
                <button className='link-s2-copy' onClick={e => navigator.clipboard.writeText(document.getElementById('code').innerHTML)}>Copy</button>
                <button onClick={finish} className='link-s2-button'>{lang === 'en' ? 'Done' : 'Готово'}</button>
                <span className='link-s2-error'>{codeError}</span>
            </div>
        </div>
    )
}