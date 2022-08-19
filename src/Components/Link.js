import React, { useState } from 'react';

export default function Link() {
  const [lang, setLang] = useState('en');

  return (
    <div className='link'>
      <button className='link-langButton' onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>{lang === 'en' ? 'Rus' : 'Eng'}</button>
      <h2 className='link-header'>{lang === 'en' ? 'It\'s time to link your account with shikimori' : 'Пора привязать ваш шикимори аккаунт'}</h2>
      <p className='link-para'>{lang === 'en' ? '' : ''}</p>
    </div>
  );
}