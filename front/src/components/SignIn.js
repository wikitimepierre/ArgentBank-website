import React from 'react';

function Signin() {
  return (
    <div className="bg-dark">
      <br />
      <div className="main sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </div>
      <br /><br /><br /><br />
    </div>
  );
}

export default Signin;

//email: "tony@stark.com"
//password: "$2b$12$vkwoOWKlydR27u22hlZOwub6eEw.GJ83zT9XXhur/45GNYElQEF0."
//firstName: "Tony"
//lastName: "Stark"
//userName: "Iron"