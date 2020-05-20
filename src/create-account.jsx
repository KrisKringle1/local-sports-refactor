import React, { useState } from 'react';


const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUserAccountCreated, setIsUserAccountCreated] = useState(false);

  const submitForm = (e) => {
    e.preventDefault()
    console.log('form submitted!');
  }

  const updateUsername = (e) => setUsername(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateConfirmPassword = (e) => setConfirmPassword(e.target.value);
  if (isUserAccountCreated) {
    return (
      <div className="welcome-signin-createaccount-pages mt-3 mb-2 d-flex flex-column text-center">
        <div className="eventListTitle mt-5 headers-font-ubuntu">
          Your account has been created successfully.
          </div>

        <div className='m-4'>
          <button className='btn btn-success submit-button headers-font-ubuntu'>
            Click here to continue</button>
        </div>

      </div>
    )
  }

  return (
    <div className="welcome-signin-createaccount-pages mt-3 mb-2 d-flex flex-column text-center">
      <form className='form mt-4 container'
        onSubmit={submitForm}>
        <div className="eventListTitle mt-5 headers-font-ubuntu">
          <h2>Create an Account</h2>
        </div>
        <div className="liked-event-border account-input-container mt-4 p-1">
          <i className="fas fa-user username-password-icons"></i>
          <input className='form-control block-text-font-oswald account-input-field'
            name='username'
            type='text'
            placeholder='Username' autoComplete='off'
            value={username} required
            onChange={updateUsername}></input>
        </div>
        <div className="liked-event-border account-input-container p-1 mt-2">
          <i className="fas fa-lock username-password-icons"></i>
          <input className='form-control block-text-font-oswald account-input-field'
            name='password'
            type='password'
            placeholder='Password' autoComplete='off'
            value={password} required
            onChange={updatePassword}></input>
        </div>
        <div className="liked-event-border account-input-container p-1 mt-2">
          <i className="fas fa-lock username-password-icons"></i>
          <input className='form-control block-text-font-oswald account-input-field'
            name='confirmPassword'
            type='password' autoComplete='off'
            placeholder='Confirm Password'
            value={confirmPassword} required
            onChange={updateConfirmPassword}></input>
        </div>
        <div className='button mt-4 headers-font-ubuntu'>
          <button className='btn btn-success block submit-button headers-font-ubuntu'>Create an Account</button>
        </div>
      </form >
      <div className='button mt-2 headers-font-ubuntu'>

        <button className='btn btn-primary block create-account-button mt-4'>Back to Sign In</button>

        <br></br>
      </div>
    </div >
  )
}
export default CreateAccount;
