import React from 'react';

export default function Auth() {

    return (
        <div className='auth'>
            <h3 className='auth-header'>Sign In</h3>
            <input className='auth-input' type={'text'} placeholder='Username' />
            <input className='auth-input' type={'password'} placeholder='Password' />
            <button className='auth-button'>Continue</button>
            <a className='auth-link'>Create an account</a>
        </div>
    );
}