import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/features/user/userSlice';

function Signin() {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const body = `{"email": "${email}","password": "${password}"}`

    dispatch(login(body));

  }

  return (
    <div className="bg-dark">
      <br />
      <div className="main sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            {/* <input type="email" id="email" defaultValue="tony@stark.com" /> */}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            {/* <input type="password" id="password" defaultValue="password123" /> */}
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </div>
      <br /><br /><br /><br />
    </div>
  );
}

export default Signin;
