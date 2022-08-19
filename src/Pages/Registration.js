import React from 'react';

export default function Registration() {

  return (
    <div className='registration'>
      <h3 className='registration-header'>Registration</h3>
      <input className='registration-input' placeholder='username' />
      <input className='registration-input' placeholder='password'/>
      <input className='registration-input' placeholder='repeat password' />
      <button className='registration-button'>Continue</button>
      <span className='registration-error'></span>
    </div>
  );
}