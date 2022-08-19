import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Auth as AuthRequest } from './../Requests/Auth.js';

export default function Auth() {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  
  const navigate = useNavigate();

  function submit() {
    AuthRequest({ username, password });
    navigate('/uwu');
  }

  return (
    <div className='auth'>
      <h3 className='auth-header'>Sign In</h3>
      <input className='auth-input' type={'text'} placeholder='Username' onChange={e => setUsername(e.target.value)} />
      <input className='auth-input' type={'password'} placeholder='Password' onChange={e => setPassword(e.target.value)} />
      <button onClick={submit} className='auth-button'>Continue</button>
      <Link to='/Registration' className='auth-link'>Create an account</Link>
    </div>
  );
}