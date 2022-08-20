import React, { useState } from 'react'

import { getCode as getCodeRequest } from '../Requests/Link'

export default function Link() {
    const [lang, setLang] = useState('en')
    const [code, setCode] = useState()
    const [codeError, setCodeError] = useState()

    function getCode() {
        const { data, error } = getCodeRequest()
        if(error) setCodeError(error)
        else setCode(data.code)
    }

    return (
        <div className='link'>
            <button className='link-langButton' onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>{lang === 'en' ? 'Rus' : 'Eng'}</button>
            <h2 className='link-s1-header'>{lang === 'en' ? 'It\'s time to link your account with shikimori' : 'Пора привязать ваш шикимори аккаунт'}</h2>
            <div className='link-s1'>
                <p className='link-s1-para'>{lang === 'en' ? '1)Enter your shikimori nickname' : '1)Введите ваш ник на шикимори'}</p>
                <input className='input-s1-input' type='text' placeholder={lang === 'en' ? 'nickname' : 'ник'} />
                <button>{lang === 'en' ? 'Next' : 'Дальше'}</button>
            </div>
            <div className='link-s2'>
                <p className='link-s2-para'>
                    {lang === 'en' ?
                        '2)Open settings on shikimori and state this code as \"website\" (after linking you can remove it)' :
                        '2)Перейдите в настройки вашего шикимори аккаунта и в поле \"сайт\" укажите код (после привязки можно убрать его)'}
                </p>
                <button className='link-s2-button' onClick={getCode}> {lang === 'en' ? 'Get code' : 'Получить код'} </button>
                <span className='link-s2-code'>{code}</span>
                <span className='link-s2-error'>{codeError}</span>
            </div>
        </div>
    )
}