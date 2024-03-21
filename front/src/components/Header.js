import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/argentBankLogo.png';

function Header() {
  const location = useLocation();
  let content;
  let debug;
  debug = (<span> <a>
    <Link to="/">HOME</Link>
    <Link to="/sign-in"> SIGN</Link>
    <Link to="/edit"> EDIT</Link>
    <Link to="/user"> USER</Link>
  </a> </span>);

  switch (location.pathname) {
    case "/":
      content = (
        <div>
          <i className="fa fa-user-circle"> <span> <Link to="/sign-in"> Sign In</Link> </span> </i>
        </div>
      );
      break;
    case "/sign-in":
      content = <a> <Link to="/"> Home</Link></a>;
      break;
    case "/user":
    case "/edit":
      content = (
        <div>
          <i className="fa fa-user-circle"> <a> <Link to="/user"> ???  </Link> </a> </i>
          <i className="fa fa-sign-out"> <a> <Link to="/"> Sign Out</Link> </a> </i>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div> {debug} {content} </div>
    </nav>
  );
}

export default Header;